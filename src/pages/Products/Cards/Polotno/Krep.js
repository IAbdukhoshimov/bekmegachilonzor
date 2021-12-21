import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/krep/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/krep/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/10.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems} name={t('ProductName.6')} desc={t('PrdouctP.6')}/>
        </>
    )
}

export default LDSP4;