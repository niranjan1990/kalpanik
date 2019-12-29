const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat([action.data]);
    case 'DELETE_USER':
      console.log('updatereducer', state, action);
      return state.filter(user => user.id !== action.id);
    case 'EDIT_USER':
      return state.map(user => (user.id === action.id ? {...user, editing: !user.editing} : user));
    case 'UPDATE':
      return state.map(user => {
        if (user.id === action.id) {
          return {
            ...user,
            fname: action.data.fname,
            lname: action.data.lname,
            email: action.data.email,
          };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};
export default userReducer;
