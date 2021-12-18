import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/jakard/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/jakard/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/6.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/7.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/8.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/9.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/10.jpg").default,
    altText: "",
    caption: "",
  }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image}  items={carouselItems}  name={t('ProductName.4')} desc={t('PrdouctP.4')}/>
        </>
    )
}

export default LDSP4;
