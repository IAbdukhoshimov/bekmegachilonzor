import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/viskoza.webp'
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require('assets/BG/products/viskoza.webp').default,
      altText: "",
      caption: "",
    }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.17')} desc={t('PrdouctP.17')}/>
        </>
    )
}

export default LDSP4;
