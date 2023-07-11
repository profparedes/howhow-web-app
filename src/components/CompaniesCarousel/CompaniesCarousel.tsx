import React, { memo } from 'react'

import Marquee from 'react-fast-marquee'

import AliExpress from 'assets/carousel/aliexpress.svg'
import ByTedance from 'assets/carousel/bytedance.svg'
import Epic from 'assets/carousel/epic.svg'
import FreeFire from 'assets/carousel/freefire.svg'
import HBO from 'assets/carousel/hbo.svg'
import JBL from 'assets/carousel/jbl.svg'
import Meliuz from 'assets/carousel/meliuz.svg'
import Mondial from 'assets/carousel/mondial.svg'
import Netflix from 'assets/carousel/netflix.svg'
import Ontex from 'assets/carousel/ontex.svg'
import Oreo from 'assets/carousel/oreo.svg'
import Paramont from 'assets/carousel/paramont.svg'
import PicPay from 'assets/carousel/picpay.svg'
import Playstation from 'assets/carousel/playstation.svg'
import TikTok from 'assets/carousel/tiktok.svg'
import Universal from 'assets/carousel/universal.svg'

const images = [
  { src: AliExpress, alt: 'AliExpress' },
  { src: ByTedance, alt: 'ByTedance' },
  { src: Epic, alt: 'Epic' },
  { src: FreeFire, alt: 'FreeFire' },
  { src: HBO, alt: 'HBO' },
  { src: JBL, alt: 'JBL' },
  { src: Meliuz, alt: 'Meliuz' },
  { src: Mondial, alt: 'Mondial' },
  { src: Netflix, alt: 'Netflix' },
  { src: Ontex, alt: 'Ontex' },
  { src: Oreo, alt: 'Oreo' },
  { src: Paramont, alt: 'Paramont' },
  { src: PicPay, alt: 'PicPay' },
  { src: Playstation, alt: 'Playstation' },
  { src: TikTok, alt: 'TikTok' },
  { src: Universal, alt: 'Universal' },
]

const CompaniesCarousel: React.FC = () => (
  <div className="border-top border-bottom">
    <Marquee speed={50}>
      {images.map((image) => (
        <img className="m-5" key={image.alt} src={image.src} alt={image.alt} />
      ))}
    </Marquee>
  </div>
)

export default memo(CompaniesCarousel)
