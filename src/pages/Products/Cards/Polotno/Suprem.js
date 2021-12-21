import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/suprem/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/suprem/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/suprem/8.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.14')} desc={t('PrdouctP.14')}/>
        </>
    )
}

export default LDSP4;