import React from "react";
import Card from "@/components/UI/Card";
import products from "../../data/products.json";
import MenuItem from "./MenuItem";
const MenuList = ({
  addCartHandler,
  removeCartHandler,
  handleInputChange,
  isAdded,
}) => {
  return (
    <Card>
      <div>
        {products.products.map((product) => (
          <MenuItem
            key={product.id}
            product={product}
            addCartHandler={addCartHandler}
            removeCartHandler={removeCartHandler}
            handleInputChange={handleInputChange}
            isAdded={isAdded}
          />
        ))}
      </div>
    </Card>
  );
};

export default MenuList;
