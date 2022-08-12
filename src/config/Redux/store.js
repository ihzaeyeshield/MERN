import {legacy_createStore as createStore } from "redux";
import reducer from './reducer/reducer'
//reducer di import 

const store = createStore(reducer)

export default store
