import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Fullaykra/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Fullaykra/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/10.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/11.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.2')} desc={t('PrdouctP.2')}/>
        </>
    )
}

export default LDSP4;