export const musicBotActionTypes = {
    addSong: 'addSong',
    setCurrentSong: 'setCurrentSong'
}

export const addSongAction = (user, watchLink) => ({
    type: musicBotActionTypes.addSong,
    payload: {
        user,
        watchLink
    }
})

export const setCurrentSongAction = (query) => ({
    type: musicBotActionTypes.setCurrentSong,
    payload: query
})