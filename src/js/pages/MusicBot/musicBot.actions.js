export const musicBotActionTypes = {
    addSong: 'addSong',
    setCurrentSong: 'setCurrentSong',
    setSongPlayed: 'setSongPlayed'
}

export const addSongAction = (user, query) => ({
    type: musicBotActionTypes.addSong,
    payload: {
        user,
        query
    }
})

export const setSongPlayed = (id) => ({
    type: musicBotActionTypes.setSongPlayed,
    payload: id
})

export const setCurrentSongAction = (query) => ({
    type: musicBotActionTypes.setCurrentSong,
    payload: query
})