import Image from "next/image";
import food from "public/images/food.jpg";
import salad from "public/images/salad.jpg";
const Hero = () => {
  return (
    <Image
      src={food}
      alt="hero image"
      priority
      style={{ width: "100%", height: "60vh", objectFit: "cover" }}
    />
  );
};

export default Hero;
