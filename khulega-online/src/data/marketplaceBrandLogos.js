/** Marketplace logos — same paths as home Our Services */
export const marketplaceBrandLogos = {
  Amazon: {
    src: '/assets/images/brands/amazon.png',
    alt: 'Amazon',
  },
  Flipkart: {
    src: '/assets/images/brands/flipkart.png',
    alt: 'Flipkart',
  },
  Meesho: {
    src: '/assets/images/brands/meesho.png',
    alt: 'Meesho',
  },
  ONDC: {
    src: '/assets/images/brands/ondc.png',
    alt: 'ONDC',
  },
}

export function logosForMarketplaces(names) {
  return (names || [])
    .map((name) => marketplaceBrandLogos[name])
    .filter(Boolean)
}