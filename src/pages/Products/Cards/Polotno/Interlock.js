import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/interlock/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/interlock/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/interlock/4.jpg").default,
    altText: "",
    caption: "",
  }
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
