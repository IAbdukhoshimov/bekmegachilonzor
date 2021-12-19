import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/interlok-jakarli/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/interlok-jakarli/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/6.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/7.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/8.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/9.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/10.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/11.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/12.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlok-jakarli/13.jpg").default,
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