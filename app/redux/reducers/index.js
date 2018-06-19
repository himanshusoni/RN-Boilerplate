import { AsyncStorage } from 'react-native'

// import { combineReducers } from 'redux'
import { persistCombineReducers } from 'redux-persist'

import { settingsReducer } from './settings.redux'

const config = { key: 'primary', storage: AsyncStorage }

export default persistCombineReducers(config, {
  settings: settingsReducer,
})
