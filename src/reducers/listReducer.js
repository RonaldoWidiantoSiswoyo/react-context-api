export const listReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DEL":
      return state.filter((item) => item.id !== payload);
    case "ADD":
      const newItem = {
        id: state.length + 1,
        title: payload,
      };
      return [...state, newItem];
    default:
      return state;
  }
};
