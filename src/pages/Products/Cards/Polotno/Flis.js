import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/Flis/F-1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/Flis/F-1.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-2.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-3.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-4.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-5.webp").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/Flis/F-6.webp").default,
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