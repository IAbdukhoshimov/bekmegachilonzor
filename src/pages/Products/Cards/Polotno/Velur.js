import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/velur/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require("assets/BG/products/velur/1.jpg").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/2.jpg").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/3.jpg").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/4.jpg").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/5.jpg").default,
      altText: "",
      caption: "",
    },
    {
      src: require("assets/BG/products/velur/6.jpg").default,
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
