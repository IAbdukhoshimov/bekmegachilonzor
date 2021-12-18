import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Penye-Interlock/2.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Penye-Interlock/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Penye-Interlock/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Penye-Interlock/4.jpg").default,
    altText: "",
    caption: "",
  }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.20')}/>
        </>
    )
}

export default LDSP4;