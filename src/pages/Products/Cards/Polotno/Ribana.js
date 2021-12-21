import React from 'react';
import CardQolip from '../Qolip';
import Image from 'assets/BG/products/ribana/1.webp';
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require("assets/BG/products/ribana/1.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/2.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/3.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/4.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/5.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/6.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/7.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/8.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/9.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/10.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/11.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/12.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/ribana/13.webp").default,
      altText: "",
      caption: "",
    },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.12')} desc={t('PrdouctP.12')}/>
        </>
    )
}

export default LDSP4;