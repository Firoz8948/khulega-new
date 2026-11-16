const CATEGORY_LABELS = {
  all: 'all categories',
  apparel: 'Apparel',
  handicrafts: 'Handicrafts',
  food: 'Food',
  'home-kitchen': 'Home & kitchen',
  beauty: 'Beauty',
}

const MARKETPLACE_LABELS = {
  any: 'any marketplace',
  amazon: 'Amazon',
  flipkart: 'Flipkart',
  meesho: 'Meesho',
  jiomart: 'JioMart',
  ondc: 'ONDC',
}

const PINNED_COUNTS = {
  'all|all|any': 5689,
  'individual|all|any': 4479,
  'enterprise|all|any': 534,
}

export function comboKey(selections) {
  return `${selections.type}|${selections.category}|${selections.marketplace}`
}

function hashString(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Deterministic count per filter combo (stable across visits). */
export function targetCountForSelections(selections) {
  const key = comboKey(selections)
  if (PINNED_COUNTS[key] !== undefined) return PINNED_COUNTS[key]

  const h = hashString(key)
  const pool = 5000
  const slice = 140 + (h % (pool - 140))

  const ceiling =
    selections.type === 'enterprise'
      ? 534
      : selections.type === 'individual'
        ? 4479
        : 5689

  let value = Math.min(slice, ceiling)
  if (selections.category !== 'all') {
    value = Math.round(value * (0.28 + (h % 37) / 100))
  }
  if (selections.marketplace !== 'any') {
    value = Math.round(value * (0.32 + ((h >> 7) % 33) / 100))
  }

  return Math.max(52, Math.min(value, ceiling))
}

function typePhrase(type) {
  if (type === 'individual') return 'individual sellers'
  if (type === 'enterprise') return 'enterprises'
  return 'sellers and enterprises'
}

export function resultCopyForSelections(selections) {
  const count = targetCountForSelections(selections)
  const showPlus =
    selections.type === 'all' &&
    selections.category === 'all' &&
    selections.marketplace === 'any'

  const cat = CATEGORY_LABELS[selections.category]
  const mkt = MARKETPLACE_LABELS[selections.marketplace]
  const hasCat = selections.category !== 'all'
  const hasMkt = selections.marketplace !== 'any'

  let prefix = ''
  let suffix = ''
  let sub = ''

  if (selections.type === 'all' && !hasCat && !hasMkt) {
    prefix = 'Services served to '
    suffix = ''
    sub =
      'Combined reach across individual sellers, enterprises, and connected marketplaces.'
  } else if (selections.type === 'individual' && !hasCat && !hasMkt) {
    suffix = ' individual sellers served'
    sub = 'Independent shops and makers growing with marketplace-ready catalogs.'
  } else if (selections.type === 'enterprise' && !hasCat && !hasMkt) {
    suffix = ' enterprises served'
    sub = 'Institutional programs, bulk onboarding, and scaled catalog operations.'
  } else if (!hasCat && !hasMkt) {
    suffix = ` ${typePhrase(selections.type)} served`
    sub = 'Refine by category or marketplace to narrow the showcase.'
  } else if (hasCat && !hasMkt) {
    if (selections.type === 'all') {
      suffix = ` sellers in ${cat}`
    } else if (selections.type === 'individual') {
      suffix = ` individual sellers in ${cat}`
    } else {
      suffix = ` enterprise programs in ${cat}`
    }
    sub = `Stories and listings tagged under ${cat}.`
  } else if (!hasCat && hasMkt) {
    if (selections.type === 'all') {
      suffix = ` sellers active on ${mkt}`
    } else if (selections.type === 'individual') {
      suffix = ` individual sellers on ${mkt}`
    } else {
      suffix = ` enterprise listings on ${mkt}`
    }
    sub = `Showcase filtered to partners selling on ${mkt}.`
  } else {
    if (selections.type === 'all') {
      suffix = ` sellers in ${cat} on ${mkt}`
    } else if (selections.type === 'individual') {
      suffix = ` individual sellers in ${cat} on ${mkt}`
    } else {
      suffix = ` enterprise listings in ${cat} on ${mkt}`
    }
    sub = `Your filters: ${cat} · ${mkt}.`
  }

  return {
    target: count,
    showPlus,
    prefix,
    suffix,
    sub,
  }
}