export const add = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const del = (id) => {
  return {
    type: "DEL",
    payload: id,
  };
};
