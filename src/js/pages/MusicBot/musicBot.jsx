import React from 'react'
import { connect } from 'react-redux'

import client from '../../scripts/bot'
import { 
    addSongAction,
    setCurrentSongAction
} from './musicBot.actions'

const mapStateToProps = (state) => {
    return {
        songs: state.musicBotReducers.songQueueReducer,
        currentSong: state.musicBotReducers.currentSongReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (song) => dispatch(addSongAction(song)),
        setCurrentSong: (query) => dispatch(setCurrentSongAction(query))
    }
}

class MusicBot extends React.Component {
    componentDidMount() {
        const vid = document.getElementById('song_video')
        vid.volume = 0.2

        this._startClient()
    }

    _startClient() {
        client.connect().catch(console.error)

        client.on('message', (channel, tags, message, self) => {
            if(self) return
            console.log('Message incoming!', message, tags)
            
            if(message[0] === '!') {
                let command = message.substring(0, message.indexOf(' '))
                let query = message.substring(message.indexOf(' ') + 1)
                command = command.slice(1, command.length)

                switch(command) {
                    case 'sr':
                        this.props.setCurrentSong(query)
                        console.log(this.props.currentSong)
                        break
                }
            }
        })
    }

    render() {
        return(
            <div className="musicBot">
                <video controls id="song_video" key={this.props.currentSong} autoplay="true">
                    <source src={`http://localhost:3000/video?query=${this.props.currentSong}`} type="video/mp4"/>
                    Unsupported
                </video>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicBot)