import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/pitek.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require("assets/BG/products/pitek.webp").default,
      altText: "",
      caption: "",
    }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.10')} desc={t('PrdouctP.10')}/>
        </>
    )
}

export default LDSP4;