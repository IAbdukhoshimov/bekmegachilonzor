import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/interlok-jakarli/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/interlok-jakarli/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/6.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/7.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/8.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/9.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/10.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/11.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/12.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/13.webp").default,
    altText: "",
    caption: "",
  }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image}  items={carouselItems}  name={t('ProductName.18')} desc={t('PrdouctP.18')}/>
        </>
    )
}

export default LDSP4;