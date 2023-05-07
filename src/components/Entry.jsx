import Header from "./layout/Header";
import Hero from "@/components/Menus/Hero";
import MenuList from "@/components/Menus/MenuList";
import { useState } from "react";
import Overlay from "./Modal/Overlay";

const Entry = () => {
  const [addOrder, setAddOrder] = useState([]);
  const [isAdded, setIsAdded] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addCartHandler = (product, id) => {
    setAddOrder((prevState) => [...prevState, { ...product, quantity }]);
    if (product.id === id) {
      setIsAdded((prevState) => [...prevState, id]);
      setQuantity(1);
    }
  };

  const removeCartHandler = (id) => {
    const removed = addOrder.filter((order) => order.id !== id);
    setAddOrder(removed);

    const removedID = isAdded.filter((el) => el != id);
    setIsAdded(removedID);
  };

  const handleModal = () => {
    console.log("Clicked modal");
    if (isModal) {
      setIsModal(false);
    } else {
      setIsModal(true);
    }
  };

  const handleInputChange = (e) => {
    // e.preventDefault();
    console.log("Input changed", e.target.value);
    setQuantity(e.target.value);
  };
  const handleInputOnBlur = () => {
    console.log("Out of focus");
    // setQuantity(1);
  };

  return (
    <div style={{ position: "relative" }}>
      <Header cartItems={addOrder} handleModal={handleModal} />
      {isModal && <Overlay onModal={handleModal} addOrder={addOrder} />}
      <Hero />
      <MenuList
        addCartHandler={addCartHandler}
        removeCartHandler={removeCartHandler}
        handleInputChange={handleInputChange}
        handleInputOnBlur={handleInputOnBlur}
        isAdded={isAdded}
      />
    </div>
  );
};

export default Entry;
