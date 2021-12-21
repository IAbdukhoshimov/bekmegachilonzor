import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/interlock/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/interlock/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/10.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/11.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/12.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/13.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image}  items={carouselItems}  name={t('ProductName.3')} desc={t('PrdouctP.3')}/>
        </>
    )
}

export default LDSP4;
