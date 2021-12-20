import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/krep/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/krep/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/6.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/7.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/8.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/9.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/krep/10.jpg").default,
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