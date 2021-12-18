import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Selenik/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Selenik/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Selenik/6.jpg").default,
    altText: "",
    caption: "",
  }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.13')} desc={t('PrdouctP.13')}/>
        </>
    )
}

export default LDSP4;