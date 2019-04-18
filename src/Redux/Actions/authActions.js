const updateUser = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(resp => {
        dispatch({
          type: "UPDATE_USER",
          resp
        });
      });
  };
};

const removeUser = () => {
  return {
    type: "REMOVE_USER"
  };
};

export { updateUser, removeUser };
