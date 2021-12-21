import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/tkan/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/tkan/1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/tkan/2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/tkan/3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/tkan/4.webp").default,
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
