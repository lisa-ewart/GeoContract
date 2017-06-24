import {
    addAlarm,
    inactivateAlarm,
    updateRoute,
    providerType,
} from './reducers';

export const actions = {
	// 'UPDATE_IDX': (oldStore, options) => updateIndex(oldStore, options),
	'ADD_ALARM': (oldStore, options) => addAlarm(oldStore, options),
    'PROVIDER_TYPE':  (oldStore, options) => providerType(oldStore, options),
}
