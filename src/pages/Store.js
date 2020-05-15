import React from 'react';
import MetaTags from 'components/MetaTags';
import CustomImage from 'components/CustomImage';
import cactusImg from 'assets/cactus-ganchillo.jpg';
import cartImg from 'assets/compras.svg';
import 'style/store.css';

const Store = ({metaTags}) => {
  function renderItems() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(
        <div className="storeItem">
          <CustomImage src={cactusImg} alt="cactus a ganchillo" />
          <div>
            <CustomImage
              src={cartImg}
              width="30"
              description="Añadir al carrito"
              title="Añadir al carrito"
            />
            <span>10€</span>
          </div>
        </div>
      );
    }
    return data;
  }
  return (
    <div id="store">
      <MetaTags metaTags={metaTags} />
      <h1>Store</h1>
      <div className="containerItems">{renderItems()}</div>
    </div>
  );
};

export default Store;
