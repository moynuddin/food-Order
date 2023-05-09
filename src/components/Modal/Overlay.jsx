import Cart from "../Cart/Cart";

import classes from "./Overlay.module.css";
const Overlay = ({ onModal, addOrder }) => {
  return (
    <div>
      <section className={classes.modal}>
        <div className={classes.flex}>
          <button className={classes.btnClose} onClick={onModal}>
            ⨉
          </button>
        </div>
        {addOrder.length > 0 && (
          <div>
            {addOrder.map((order) => (
              <Cart key={order.id} cartOrder={order} />
            ))}
          </div>
        )}
        {<p className={classes.empty}>Your cart is empty!</p>}
      </section>

      <div className={classes.overlay}></div>
    </div>
  );
};

export default Overlay;
