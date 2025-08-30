import FooterMenu from "../Components/FooterMenu";
import Menus from "../Components/Menus";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Menus />
      </div>
      <Outlet />
      <FooterMenu/>
    </div>
  );
};

export default Menu;
