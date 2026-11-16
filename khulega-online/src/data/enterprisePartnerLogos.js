/** Enterprise Impact — partner logos in /public/assets/images/logos */
const logoBase = '/assets/images/logos'

function logoSrc(filename) {
  return `${logoBase}/${encodeURIComponent(filename)}`
}

export const enterprisePartnerLogos = [
  { src: logoSrc('AFARM logo.png'), alt: 'AFARM' },
  { src: logoSrc('Aadi Millets.jpeg'), alt: 'Aadi Millets' },
  { src: logoSrc('Abovnbyond logo.jpg'), alt: 'Abovnbyond' },
  { src: logoSrc('adhiraj handcrafted logo.jpg'), alt: 'Adhiraj Handcrafted' },
  { src: logoSrc('amakund logo.jpg'), alt: 'Amakund' },
  { src: logoSrc('amarkantak.png'), alt: 'Amarkantak' },
  { src: logoSrc('bhudhar agro logo.jpg'), alt: 'Bhudhar Agro' },
  { src: logoSrc('FWWB-Logo-1.png'), alt: 'FWWB' },
  { src: logoSrc('ken betwa logo.png'), alt: 'Ken Betwa' },
  { src: logoSrc('Umang logo.jpg'), alt: 'Umang' },
  { src: logoSrc('vanmaya logo.jpg'), alt: 'Vanmaya' },
  { src: logoSrc('susag logo.jpg'), alt: 'Susag' },
  { src: logoSrc('srijan logo.jpg'), alt: 'Srijan' },
  { src: logoSrc('seva tribe logo.jpg'), alt: 'Seva Tribe' },
]