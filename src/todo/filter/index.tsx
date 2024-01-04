import React from "react";
import Button from "../../components/Button";
import Radio from "../../components/Radio";
import Drawer from "../../components/drawer";
import useStore from "../../store";
import Form from "../form";
import { FilterProps } from "../../../types";

const Filter: React.FC<FilterProps> = ({ setStatus, status }) => {
  const isOpen = useStore((state) => state.isOpen);
  const handleOpen = useStore((state) => state.handleOpen);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.name);
  };

  return (
    <div className="flex justify-start flex-row-reverse gap-3 border-y-2 py-3 border-gray-100 bg-white px-3">
      <Button onClick={handleOpen}>Add Task</Button>
      <Drawer isOpen={isOpen} onClose={handleOpen}>
        {isOpen && <Form handleOpen={handleOpen} />}
      </Drawer>
      <Radio
        name="Completed"
        id={1}
        checked={status === "Completed"}
        onChange={handleStatusChange}
      />
      <Radio
        name="Incomplete"
        id={2}
        checked={status === "Incomplete"}
        onChange={handleStatusChange}
      />
      <Radio
        name="All"
        id={3}
        checked={status === "All"}
        onChange={handleStatusChange}
      />
    </div>
  );
};

export default Filter;
