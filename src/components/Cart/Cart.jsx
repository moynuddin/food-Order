import classes from "./Cart.module.css";
const Cart = ({ cartOrder }) => {
  console.log(cartOrder);
  return (
    <div className={classes.cart}>
      <div>
        <p className={classes.name}>{cartOrder.name}</p>
        <p
          className={`${
            cartOrder.category === "Non-veg" ? classes.nonVeg : classes.veg
          }`}
        >
          {cartOrder.category}
        </p>
      </div>
      <div className={classes.priceWrapper}>
        <span>{cartOrder.quantity}</span> x<span>${cartOrder.price}</span> =
        <span>${cartOrder.quantity * cartOrder.price}</span>
      </div>
    </div>
  );
};

export default Cart;
