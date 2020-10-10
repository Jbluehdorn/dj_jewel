import { combineReducers } from 'redux'

import {
    musicBotActionTypes,
    addSongAction
} from './musicBot.actions'

const songQueueReducer = (state = [], action) => {
    switch(action.type) {
        case musicBotActionTypes.addSong:
            return state.push(action.payload)
        default: 
            return state
    }
}

export default combineReducers({songQueueReducer})