import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Pechat/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Pechat/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/6.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/7.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/8.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/9.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/10.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/11.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/12.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/13.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/14.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/15.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/16.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/17.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/18.jpg").default,
    altText: "",
    caption: "",
  }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.9')} desc={t('PrdouctP.9')}/>
        </>
    )
}

export default LDSP4;