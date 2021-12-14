import { createStore, applyMiddleware } from "redux";
import thunk from "react-redux";

const configureStore = () => {
    const store = createStore(null, applyMiddleware(thunk));

    return store;
};

export default configureStore;
