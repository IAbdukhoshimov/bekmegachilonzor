import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/jakard/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/jakard/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/10.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/11.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/12.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/jakard/13.webp").default,
    altText: "",
    caption: "",
  },
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
