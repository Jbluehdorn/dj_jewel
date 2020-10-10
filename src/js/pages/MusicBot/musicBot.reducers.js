import { combineReducers } from 'redux'

import {
    musicBotActionTypes,
    addSongAction
} from './musicBot.actions'

const songQueueReducer = (state = [], action) => {
    switch(action.type) {
        case musicBotActionTypes.addSong:
            let newState = state.slice()
            let currentQueue = state[0]

            if(!currentQueue || state[state.length - 1].some(sr => sr.user === action.payload.user)) {
                newState.push([{
                    ...action.payload,
                    played: false,
                    id: `${action.payload.user}@${state.length}`
                }])
                return newState
            }

            return state.map((currQueue, index) => {
                if(!currQueue.some(sr => sr.user === action.payload.user)) {
                    currQueue.push({
                        ...action.payload,
                        played: false,
                        id: `${action.payload.user}@${index + 1}`
                    })
                }

                return currQueue
            })
        case musicBotActionTypes.setSongPlayed:
            return state
                .map(queue => {
                    if(queue.some(sr => sr.id === action.payload)) {
                        return queue.map(sr => {
                            if(sr.id === action.payload) {
                                return {...sr, played: true}
                            }

                            return sr
                        })
                    }

                    return queue
                })
                .filter(queue => !queue.some(sr => sr.played))
        default: 
            return state
    }
}

const currentSongReducer = (state = 'https://www.youtube.com/watch?v=tNqOEt5ptr4', action) => {
    switch(action.type) {
        case musicBotActionTypes.setCurrentSong:
            return action.payload
        default:
            return state
    }
}


export default combineReducers({songQueueReducer, currentSongReducer})