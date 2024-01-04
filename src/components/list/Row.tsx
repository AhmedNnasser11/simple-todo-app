import { MdOutlineClose } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import IconButton from "../iconButton";
import { RowProps } from "../../../types";


const Row: React.FC<RowProps> = ({ item, handleOpen, edit, changeStatus, deleteTodo }) => {
  return (
    <div className="flex bg-white text-gray-900 w-[60%] mx-auto px-3 py-2 rounded-md">
      <div className="w-[33%] px-3 text-center">{item?.text}</div>
      <div
        className={`w-[33%] px-3 border-l text-center ${
          item.isCompleted === true ? "text-blue-700" : "text-red-600"
        }`}
      >
        {item?.isCompleted === true ? "Completed" : item?.isCompleted === false ? "Incompleted" : "Unknown"}
      </div>
      <div className="w-[33%] px-3 border-l text-center flex gap-2 flex-row-reverse">
        <IconButton
          onClick={() => {
            handleOpen();
            edit(item);
          }}
        >
          <FaRegEdit />
        </IconButton>
        <IconButton onClick={() => deleteTodo(item.id)}>
          <MdOutlineClose />
        </IconButton>
        <div className="flex gap-1 items-center">
          <label className="text-gray-800 text-sm" htmlFor="Completed">
            Completed
          </label>
          <input
            type="checkbox"
            onChange={() => changeStatus(item.id)}
            name="Completed"
            id="Completed"
            checked={item.isCompleted === true}
          />
        </div>
      </div>
    </div>
  );
};

export default Row;
