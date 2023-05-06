import Link from "next/link";
import Image from "next/image";

import classes from "./Header.module.css";
import cart from "public/images/cart.png";

const Header = ({ cartItems, handleModal }) => {
  return (
    <nav className={classes.wrapper}>
      <div>
        <Link href="#" className={classes.link}>
          Foodiee
        </Link>
        <div className={classes.cartWrapper} onClick={handleModal}>
          <Image src={cart} width={30} height={30} alt="Cart" />
          <span className={classes.badge}>{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
