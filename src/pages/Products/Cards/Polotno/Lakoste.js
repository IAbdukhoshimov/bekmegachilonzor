import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/lakoste/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/lakoste/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/10.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image}  items={carouselItems}  name={t('ProductName.7')} desc={t('PrdouctP.7')}/>
        </>
    )
}

export default LDSP4;