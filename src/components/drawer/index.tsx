/** @format */

import { DrawerProps } from "../../../types";
import { MdClose } from "react-icons/md";

const Drawer = ({ children, onClose, isOpen }: DrawerProps) => {
  return (
    <div
      className={`${
        isOpen
          ? "top-5 ease-in-out duration-300"
          : "-top-[100%]  ease-in-out duration-300"
      } absolute bg-white h-[300px] w-[50%] ease-in-out duration-300 right-[20%]`}>
      <div className="bg-blue-800 h-14 w-full z-50 rounded-l-md">
        <button
          type="button"
          onClick={onClose}
          className="text-white px-3 py-3 ">
          <MdClose />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Drawer;
