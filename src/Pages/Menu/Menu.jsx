import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert")
  const pizza = menu.filter((item) => item.category === "pizza")
  const salad = menu.filter((item) => item.category === "salad")
  const soup = menu.filter((item) => item.category === "soup")
  const offered = menu.filter((item) => item.category === "offered")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle subHeading="Don't miss" heading="Toaday's offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
  </div>
  );
};

export default Menu;
