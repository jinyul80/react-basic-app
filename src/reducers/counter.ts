const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = (num: number) => ({
  type: INCREMENT,
  num: num,
});
export const decrement = (num: number) => ({
  type: DECREMENT,
  num: num,
});

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      console.log('state:', state);
      console.log('action:', action);
      return {
        ...state,
        count: state.count + Number(action.num),
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - Number(action.num),
      };
    default:
      return state;
  }
};

export default counterReducer;
