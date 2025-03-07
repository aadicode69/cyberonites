import Item from "./Item";
import { Explore, Visit, Socials } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:px-8 px-5 py-16 bg-black">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-start w-full sm:w-1/2 md:w-1/3 text-left">
        <h2 className="lg:text-xl text-lg mb-0 leading-tight">
          <div className="text-cyan-300 text-4xl font-semibold font-clash pb-2">CY.</div>
          <div>Empowering students with</div>
          <div>advanced cybersecurity</div> 
          <div>knowledge and skills.</div>
          <div className="text-cyan-300 text-xl font-semibold">BE POWERFUL.</div>
        </h2>
      </div>

      {/* Content Sections */}
      <div className="flex-grow w-full sm:w-1/2 md:w-1/4 flex flex-col items-start">
        <Item Links={Explore} title="Explore" />
      </div>

      <div className="flex-grow w-full sm:w-1/2 md:w-1/4 flex flex-col items-start">
        <Item Links={Visit} title="Visit" />
      </div>

      <div className="flex-grow w-full sm:w-1/2 md:w-1/4 flex flex-col items-start">
        <Item Links={Socials} title="Follow Us" />
      </div>
    </div>
  );
};

export default ItemsContainer;
