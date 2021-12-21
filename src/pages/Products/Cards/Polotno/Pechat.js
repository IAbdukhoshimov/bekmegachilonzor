import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Pechat/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Pechat/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/10.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/11.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/12.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/13.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/14.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/15.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/16.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/17.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Pechat/18.webp").default,
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