import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/maxra/1.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
  {
    src: require("assets/BG/products/maxra/1.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/2.jpg").default,
    altText: "",
    caption: "",
  },
  {
    src: require("assets/BG/products/maxra/3.jpg").default,
    altText: "",
    caption: "",
  },
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.8')} desc={t('PrdouctP.8')}/>
        </>
    )
}

export default LDSP4;