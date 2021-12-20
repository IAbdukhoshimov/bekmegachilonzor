import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/lakoste/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/lakoste/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/6.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/7.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/8.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/9.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/lakoste/10.jpg").default,
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