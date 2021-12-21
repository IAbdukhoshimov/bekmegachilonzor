import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/maxra/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/maxra/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/10.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/11.webp").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.8')} desc={t('PrdouctP.8')}/>
        </>
    )
}

export default LDSP4;