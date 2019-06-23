import { 
  createStore, 
  applyMiddleware 
} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
  persistReducer, 
  persistStore 
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./reducers/rootReducer";
import { apiMiddlewares } from "./middlewares/apiMiddleware";
import { productMiddleware } from "./middlewares/productMiddlewares";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let rootStore = createStore(
  persistedReducer, 
  composeWithDevTools(
    applyMiddleware(
      ...apiMiddlewares,
      ...productMiddleware
    )
  )
)

export let persistor = persistStore(rootStore);
