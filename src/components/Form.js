import React, { useCallback, useContext, useState } from "react";
import { add } from "../action/action";
import { DataContext } from "../context/DataContext";

const Form = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(DataContext);
  const change = (item) => {
    setText(item.target.value);
  };
  const submit = () => {
    item.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={text}
          placeholder="Enter new List"
          onChange={change}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
