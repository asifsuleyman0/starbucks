import Menus from "../Components/Menus";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex">
      <Menus />
      <Outlet />
    </div>
  );
};

export default Menu;
