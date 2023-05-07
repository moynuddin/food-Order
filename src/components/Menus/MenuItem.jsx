import React from "react";
import classes from "./MenuItem.module.css";
const MenuItem = ({
  product,
  addCartHandler,
  removeCartHandler,
  handleInputChange,
  handleInputOnBlur,
  isAdded,
}) => {
  return (
    <div className={classes.foodItem}>
      <div className={classes.partOne}>
        <p className={classes.foodName}>{product.name}</p>
        <p
          className={`${
            product.category === "Non-veg" ? classes.nonVeg : classes.veg
          }`}
        >
          {product.category}
        </p>
      </div>
      <div className={classes.partTwo}>
        <div className={classes.priceWrapper} onBlur={handleInputOnBlur}>
          <p className={classes.price}>${product.price}</p>
          <input
            className={classes.input}
            type="number"
            defaultValue={1}
            max={5}
            min={1}
            onChange={handleInputChange}
          />
        </div>
        {!isAdded.includes(product.id) && (
          <div
            className={classes.btnAdd}
            onClick={() => addCartHandler(product, product.id)}
          >
            Add
          </div>
        )}
        {isAdded.includes(product.id) && (
          <div
            className={classes.btnRemove}
            onClick={() => removeCartHandler(product.id)}
          >
            Remove
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
