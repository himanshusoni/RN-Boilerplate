import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import { persistStore, persistCombineReducers } from 'redux-persist'
import reducers from './reducers'

export default function configureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'rn-boilerplate',
      realtime: true,
      hostname: 'localhost',
      port: 8000, // pointing to local remotedev server
    }),
  )

  // const config = { key: 'primary', storage: AsyncStorage }
  // const enhancedReducers = persistCombineReducers(config, reducers)
  const store = createStore(reducers, enhancer)
  persistStore(store, null, () => onCompletion(store))
}
