import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Selenik/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Selenik/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/10.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.13')} desc={t('PrdouctP.13')}/>
        </>
    )
}

export default LDSP4;