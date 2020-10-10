import React from 'react'
import { connect } from 'react-redux'

import { run } from '../../scripts/bot'
import { addSongAction } from './musicBot.actions'

const mapStateToProps = (state) => {
    return {
        songs: state.musicBotReducers.songQueueReducer,
        currentSong: 'pep376Nwbts' 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (song) => dispatch(addSongAction(song))
    }
}

class MusicBot extends React.Component {
    componentDidMount() {
        const vid = document.getElementById('song_video')
        vid.volume = 0.2
        run()
    }

    render() {
        return(
            <div className="musicBot">
                <video controls id="song_video">
                    <source src={`http://localhost:3000/video?url=${this.props.currentSong}`} type="video/mp4"/>
                    Unsupported
                </video>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicBot)