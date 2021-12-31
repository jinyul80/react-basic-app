const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

type CounterStateType = {
  count: number;
};

type CounterActionType = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export const increase = (num: number) => ({
  type: INCREMENT,
  num: num,
});
export const decrease = (num: number) => ({
  type: DECREMENT,
  num: num,
});

const initialState: CounterStateType = {
  count: 0,
};

const counterReducer = (state: CounterStateType = initialState, action: CounterActionType): CounterStateType => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.num,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.num,
      };
    default:
      return state;
  }
};

export default counterReducer;
