import React from 'react'
import CardQolip from '../Qolip'
import Image from 'assets/BG/products/poplin.jpg'
import { useTranslation } from 'react-i18next';

const carouselItems = [
    {
      src: require("assets/BG/products/poplin.jpg").default,
      altText: "",
      caption: "",
    }
  ];

function LDSP4() {
  const { t } = useTranslation();
    return (
        <>
            <CardQolip cardImage={Image} items={carouselItems}  name={t('ProductName.11')} desc={t('PrdouctP.11')}/>
        </>
    )
}
export default LDSP4;