export const initialState = {
  term: null,
  PageNum: 0,
  OverlayActive: false,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_PAGE_NUM: "SET_PAGE_NUM",
  SET_OVERLAY: "SET_OVERLAY",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_PAGE_NUM:
      return {
        ...state,
        PageNum: action.PageNum,
      };
    case actionTypes.SET_OVERLAY:
      return {
        ...state,
        OverlayActive: action.OverlayActive,
      };

    default:
      return state;
  }
};

export default reducer;
