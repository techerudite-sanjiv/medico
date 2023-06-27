import { combineReducers } from "redux";
import setCommentDataReducer from "./counter";

const rootReducer = combineReducers({
    setCommentDataReducer,
});

export default rootReducer;
