import React, { useState } from 'react';

const MerchandiseItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="merchandise-item">
      <img src={item.image} alt={item.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={decrementQuantity} style={{ marginRight: '5%', padding: '5%' }}>-</button>
        <span style={{ fontSize: '20px' }}>{quantity}</span>
        <button onClick={incrementQuantity} style={{ marginLeft: '5%', padding: '5%' }}>+</button>
      </div>
    </div>
  );
};

export default MerchandiseItem;
