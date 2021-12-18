import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/tkan/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/tkan/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/tkan/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/tkan/3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/tkan/4.jpg").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.15')} desc={t('PrdouctP.15')}/>
        </>
    )
}

export default LDSP4;
