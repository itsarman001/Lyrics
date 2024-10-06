import React from 'react';
import logo from '../../assets/BrandName.webp'

const BrandName = ({size}) => {
  return (
    <img className={size} src={logo} alt="Lamha" />
  );
};

export default BrandName;