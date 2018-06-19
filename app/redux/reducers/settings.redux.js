// will be moved to a app settings container.
import { pathOr } from 'ramda'
import { createStructuredSelector } from 'reselect'

const initialSettings = {
  version: '0.1.0',
}

export const settingsReducer = (state = initialSettings, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const getAppVersion = pathOr('N/A', ['settings', 'version'])

export const settingsSelector = createStructuredSelector({
  version: getAppVersion,
})
