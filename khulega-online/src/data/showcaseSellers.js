const logoBase = '/assets/images/logos'

function logoSrc(filename) {
  return `${logoBase}/${encodeURIComponent(filename)}`
}

const allShowcaseSellers = [
  {
    id: 'ken-betwa',
    category: 'Grocery',
    name: 'Ken Betwa Mahila Farmer Producer Company Limited',
    cityState: 'Tikamgarh, Madhya Pradesh',
    listingCount: 10,
    marketplaces: ['ONDC', 'Meesho', 'Flipkart'],
    logoSrc: logoSrc('ken betwa logo.png'),
    logoAlt: 'Ken Betwa Mahila Farmer Producer Company',
  },
  {
    id: 'amarkantak',
    category: 'Grocery',
    name: 'Amarkantak Horticulture Producer Company Limited',
    cityState: 'Anuppur, Madhya Pradesh',
    listingCount: 5,
    marketplaces: ['ONDC', 'Meesho', 'Flipkart'],
    logoSrc: logoSrc('amarkantak.png'),
    logoAlt: 'Amarkantak Horticulture Producer Company',
  },
  {
    id: 'bhudhar-agro',
    category: 'Grocery',
    name: 'Bhudhar Agro Farming Producer Company Limited',
    cityState: 'Kannauj, Uttar Pradesh',
    listingCount: 12,
    marketplaces: ['ONDC', 'Meesho', 'Flipkart'],
    logoSrc: logoSrc('bhudhar agro logo.jpg'),
    logoAlt: 'Bhudhar Agro Farming Producer Company',
  },
  {
    id: 'umang',
    category: 'Grocery',
    name: 'Mahila Umang Producers Co. Ltd',
    cityState: 'Almora, Uttarakhand',
    listingCount: 36,
    marketplaces: ['ONDC', 'Meesho'],
    logoSrc: logoSrc('Umang logo.jpg'),
    logoAlt: 'Mahila Umang Producers',
  },
  {
    id: 'seva-tribe',
    category: 'Grocery and Home & Kitchen',
    name: 'Seva Tribe',
    cityState: 'Mumbai, Maharashtra',
    listingCount: 34,
    marketplaces: ['ONDC', 'Meesho'],
    logoSrc: logoSrc('seva tribe logo.jpg'),
    logoAlt: 'Seva Tribe',
  },
  {
    id: 'adhiraj',
    category: 'Fashion',
    name: 'Adhiraj Handcrafted',
    cityState: 'Shivpuri, Madhya Pradesh',
    listingCount: 70,
    marketplaces: ['Meesho'],
    logoSrc: logoSrc('adhiraj handcrafted logo.jpg'),
    logoAlt: 'Adhiraj Handcrafted',
  },
  {
    id: 'susag',
    category: 'Grocery',
    name: 'Susag Millet Sister FPC',
    cityState: 'Alluri Sitharama Raju, Andhra Pradesh',
    listingCount: 12,
    marketplaces: ['ONDC', 'Meesho'],
    logoSrc: logoSrc('susag logo.jpg'),
    logoAlt: 'Susag Millet Sister FPC',
  },
  {
    id: 'vanmaya',
    category: 'Grocery',
    name: 'Vanmaya Stree Coffee',
    cityState: 'Araku Valley, Andhra Pradesh',
    listingCount: 9,
    marketplaces: ['ONDC', 'Meesho'],
    logoSrc: logoSrc('vanmaya logo.jpg'),
    logoAlt: 'Vanmaya Stree Coffee',
  },
  {
    id: 'abovnbyond',
    category: 'Home & Kitchen and Fashion',
    name: 'Abovnbyond',
    cityState: 'Delhi',
    listingCount: 20,
    marketplaces: ['Meesho', 'Flipkart', 'Amazon'],
    logoSrc: logoSrc('Abovnbyond logo.jpg'),
    logoAlt: 'Abovnbyond',
  },
  {
    id: 'aadi-millets',
    category: 'Grocery',
    name: 'Aadi Millets',
    cityState: 'Dhule, Maharashtra',
    listingCount: 8,
    marketplaces: ['ONDC', 'Meesho'],
    logoSrc: logoSrc('Aadi Millets.jpeg'),
    logoAlt: 'Aadi Millets',
  },
  {
    id: 'amakund',
    category: 'Fashion',
    name: 'Amakund Producer Company Limited',
    cityState: 'Malkangiri, Odisha',
    listingCount: 30,
    marketplaces: ['Meesho', 'Flipkart', 'Amazon'],
    logoSrc: logoSrc('amakund logo.jpg'),
    logoAlt: 'Amakund Producer Company',
  },
]

const nonGrocery = allShowcaseSellers
  .filter((s) => s.category !== 'Grocery')
  .sort((a, b) => b.listingCount - a.listingCount)

const topGrocery = allShowcaseSellers
  .filter((s) => s.category === 'Grocery')
  .sort((a, b) => b.listingCount - a.listingCount)

/** 8 cards: fashion / home & kitchen first; no extra pure-grocery beyond填满 to 8 */
export const showcaseSellers = [
  ...nonGrocery,
  ...topGrocery.slice(0, Math.max(0, 8 - nonGrocery.length)),
].slice(0, 8)