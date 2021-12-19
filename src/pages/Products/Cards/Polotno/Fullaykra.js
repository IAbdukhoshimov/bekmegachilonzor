import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Fullaykra/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Fullaykra/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/6.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/7.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/8.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/9.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/10.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Fullaykra/11.jpg").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.2')} desc={t('PrdouctP.2')}/>
        </>
    )
}

export default LDSP4;