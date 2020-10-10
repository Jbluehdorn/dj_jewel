import React from 'react'
import { connect } from 'react-redux'

import client from '../../scripts/bot'
import { 
    addSongAction,
    setCurrentSongAction,
    setSongPlayed
} from './musicBot.actions'

const mapStateToProps = (state) => {
    return {
        songs: state.musicBotReducers.songQueueReducer,
        currentSong: state.musicBotReducers.songQueueReducer.length ? 
            state.musicBotReducers.songQueueReducer[0].find(sr => sr.played === false) : 
            null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (user, query) => dispatch(addSongAction(user, query)),
        setCurrentSong: (query) => dispatch(setCurrentSongAction(query)),
        setSongPlayed: (id) => dispatch(setSongPlayed(id))
    }
}

class MusicBot extends React.Component {
    componentDidMount() {
        this._startClient()
    }

    _endSong() {
        console.log('song ending')
        this.props.setSongPlayed(this.props.currentSong.id)
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
                        this.props.addSong(tags.username, query)
                        break
                }
            }
        })
    }

    _onPlayHandler(e) {
        e.target.volume = 0.2
    }

    render() {

        return(
            <div className="musicBot">
                <video onPlay={(e) => this._onPlayHandler(e)} onEnded={() => this._endSong()} controls id="song_video" key={this.props.currentSong} autoPlay="true">
                    <source src={`http://localhost:3000/video?query=${this.props.currentSong ? this.props.currentSong.query : ''}`} type="video/mp4"/>
                    Unsupported
                </video>

                <code>
                    {JSON.stringify(this.props)}
                </code>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicBot)