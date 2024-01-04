/** @format */

import { useEffect, useState } from "react";
import Radio from "../Radio";
import Button from "../Button";
import useStore from "../../store";

const Form = ({ handleOpen }: { handleOpen: () => void }) => {
  const addTodo = useStore(state => state.addTodo);
  const todo = useStore(state => state.todo);
  const resetEdit = useStore(state => state.resetEdit);

  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState(todo || {
    text: "",
    isCompleted: false,
    id: 0,
  });
  useEffect(() => {  
    return () => {
      resetEdit()
    }
  }, [])
  return (
    <div className="px-3 py-2">
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2">
          Task Name
        </label>
        <input
          type="text"
          value={data.text}
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={e => setData({ ...data, text: e.target.value })}
        />
        {!data?.text && submited && (
          <p className="text-red-600">This field is required</p>
        )}
      </div>
      <div className="mb-4">
        <Radio
          name="Completed"
          onChange={() => setData({ ...data, isCompleted: true })}
          id={1}
          checked={data.isCompleted === true}
        />
        <Radio
          name="Incomplete"
          onChange={() => setData({ ...data, isCompleted: false })}
          id={2}
          checked={data.isCompleted === false}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            setSubmited(true);
            if (
              data.text &&
              (data.isCompleted === false || data.isCompleted === true)
            ) {
              addTodo(data);
              handleOpen();
            }
          }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
