import { Todo } from "../../../types";
import useStore from "../../store";
import Header from "./Header";
import Row from "./Row";

const List = ({ status }: { status: string }) => {
  const todoList = useStore((state) => state.todoList);
  const handleOpen = useStore((state) => state.handleOpen);
  const edit = useStore((state) => state.edit);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const changeStatus = useStore((state) => state.changeStatus);

  const handleFilter = (type: string): Todo[] => {
    let data: Todo[] = [];
    switch (type) {
      case "Completed":
        data = todoList.filter((todo) => todo.isCompleted === true);
        break;
      case "Incomplete":
        data = todoList.filter((todo) => todo.isCompleted === false);
        break;

      default:
        data = todoList;
        break;
    }
    return data;
  };

  return (
    <div>
      <Header />
      {handleFilter(status)?.length === 0 ? (
        <div className="bg-white text-gray-900 w-[60%] mx-auto px-3 py-2 rounded-md text-center">
          <h5>no tasks</h5>
        </div>
      ) : (
        handleFilter(status).map((item) => (
          <Row
            key={item.id}
            item={item}
            edit={edit}
            handleOpen={handleOpen}
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
          />
        ))
      )}
    </div>
  );
};

export default List;
