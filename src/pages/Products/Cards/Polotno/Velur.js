import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/velur/1.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require("assets/BG/products/velur/1.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/2.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/3.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/4.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/5.webp").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/6.webp").default,
      altText: "",
      caption: "",
    }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.16')} desc={t('PrdouctP.16')}/>
        </>
    )
}

export default LDSP4;