import { SET_COMMENT_DATA } from "../constant";

const initialState = {
  commentData: null,
};

export default function setCommentDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENT_DATA:
      let commentData = action?.data;
      return {
        ...state,
        commentData: commentData,
      };

    default:
      return state;
  }
}
