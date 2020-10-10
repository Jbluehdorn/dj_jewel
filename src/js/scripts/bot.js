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

export default client