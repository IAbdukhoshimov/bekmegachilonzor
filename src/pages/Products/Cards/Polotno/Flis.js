import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Flis/F-1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Flis/F-1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-3.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-4.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-5.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-6.jpg").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems} name={t('ProductName.1')} desc={t('PrdouctP.1')}/>
        </>
    )
}

export default LDSP4;