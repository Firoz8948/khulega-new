const logoBase = '/assets/images/logos'

function logoSrc(filename) {
  return `${logoBase}/${encodeURIComponent(filename)}`
}

export const enterpriseCaseCards = [
  {
    id: 'afarm',
    name: 'AFARM',
    fullName: 'Action for Agricultural Renewal in Maharashtra',
    enterpriseType:
      'Non-profit network of civil society and voluntary organizations',
    skuCount: '25+',
    logoSrc: logoSrc('AFARM logo.png'),
    logoAlt: 'AFARM — Action for Agricultural Renewal in Maharashtra',
  },
  {
    id: 'srijan',
    name: 'Srijan',
    fullName: null,
    enterpriseType:
      'Non-profit organisation for Social Development of rural India',
    skuCount: '15',
    logoSrc: logoSrc('srijan logo.jpg'),
    logoAlt: 'Srijan',
  },
  {
    id: 'fwwb',
    name: 'FWWB',
    fullName: "Friends of Women's World Banking",
    enterpriseType: 'Non-profit organisation for Women Empowerment',
    skuCount: '31',
    logoSrc: logoSrc('FWWB-Logo-1.png'),
    logoAlt: "FWWB — Friends of Women's World Banking",
  },
]