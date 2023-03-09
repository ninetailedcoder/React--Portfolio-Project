import React, { useState } from "react";
import items from "../components/StoreItems";
import MerchandiseItem from "../components/MerchandiseItem";

const MerchPage = () => {
  return (
    <div className="merchandise-page">
      <div className="merchandise-grid">
        {items.map((item) => (
          <MerchandiseItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MerchPage;
