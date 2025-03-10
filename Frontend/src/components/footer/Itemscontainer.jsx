
import Item from "./Item";
import { Explore, Visit, Socials } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-clash">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 py-16">
        <div className="space-y-4">
          <div className="text-cyan-300 text-4xl font-bold tracking-tighter border-l-4 border-cyan-300/30 pl-3">CY.</div>
          <h2 className="text-lg leading-relaxed text-gray-300/90">
            <div>Empowering students with</div>
            <div>advanced cybersecurity</div>
            <div>knowledge and skills.</div>
            <div className="text-cyan-300 text-xl font-semibold mt-4 tracking-wide">BE POWERFUL.</div>
          </h2>
        </div>

        <div className="backdrop-blur-xs"><Item Links={Explore} title="Explore" /></div>
        <div className="backdrop-blur-xs"><Item Links={Visit} title="Visit" /></div>
        <div className="backdrop-blur-xs"><Item Links={Socials} title="Follow Us" /></div>
      </div>
    </div>
  );
};

export default ItemsContainer;
