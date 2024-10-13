import Item from "./Item";
import { Explore, Visit, Socials } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex justify-evenly grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={Explore} title="Explore" />
      <Item Links={Visit} title="Visit"/>
      <Item Links={Socials} title="Follow Us" />
    </div>
  );
};

export default ItemsContainer;