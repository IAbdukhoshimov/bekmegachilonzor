import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/kashkorse/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require("assets/BG/products/kashkorse/1.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/kashkorse/2.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/kashkorse/3.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/kashkorse/4.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/kashkorse/5.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/kashkorse/6.webp").default,
      altText: "",
      caption: "",
    },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.5')} desc={t('PrdouctP.5')}/>
        </>
    )
}

export default LDSP4;

