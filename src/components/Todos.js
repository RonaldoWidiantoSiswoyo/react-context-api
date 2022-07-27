import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { del } from "../action/action";

const Todos = () => {
  const { lists, dispatch } = useContext(DataContext);
  const remove = (id) => {
    dispatch(del(id));
  };
  return (
    <div>
      <ul>
        {lists.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => remove(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
