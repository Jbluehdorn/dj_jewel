import tmi from 'tmi.js'

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: 'jewelthebot',
        password: 'oauth:20axyugukhqvce8hxejtmdusmq0cxy'
    },
    channels: [ 'ironthejewel' ]
})

export const run = () => {
    client.connect().catch(console.error)

    client.on('message', (channel, tags, message, self) => {
        if(self) return
        console.log('Message incoming!', message, tags)
    })
}