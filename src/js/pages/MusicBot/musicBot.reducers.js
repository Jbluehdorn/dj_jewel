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

const currentSongReducer = (state = 'https://www.youtube.com/watch?v=tNqOEt5ptr4', action) => {
    switch(action.type) {
        case musicBotActionTypes.setCurrentSong:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}


export default combineReducers({songQueueReducer, currentSongReducer})