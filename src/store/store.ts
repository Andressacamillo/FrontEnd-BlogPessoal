import {createStore} from "redux"
import {reducer} from "./tokens/tokensReducer"

const store = createStore(reducer);

export default store;