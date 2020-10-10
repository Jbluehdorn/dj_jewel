export const musicBotActionTypes = {
    addSong: 'addSong'
}

export const addSongAction = (user, watchLink) => ({
    type: musicBotActionTypes.addSong,
    payload: {
        user,
        watchLink
    }
})