import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import blogPostReducer from "./blogPostReducer";

const reducer = combineReducers({globalReducer, blogPostReducer})
//combine agar mudah untuk di akses melalui satu jalur
//helper function turns an object whose values are different 
//reducing functions into a single reducing function you can pass to CreateStore

export default reducer