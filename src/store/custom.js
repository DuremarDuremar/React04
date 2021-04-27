const defaultState = {
  customers: [],
};

const customReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      return { ...state, cash: state.custom + action.payload };
    }
    case "GET_CUSTOMER": {
      return { ...state, cash: state.custom - action.payload };
    }
    default:
      return state;
  }
};

export default customReducer;
