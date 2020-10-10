const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()

const port = 3000

app.get('/video', (req, res) => {
    const query = req.query.query
    let url = query

    if(query.includes('youtube.com/watch?')) {
        let v = query.slice(
            query.indexOf('v=') + 2,
            query.length
        )

        url = v.includes('&') ? v.slice(0, v.indexOf('&')) : v
    }
    
    res.header('Content-Dispotion', 'attachment;fileName="video.mp4"')

    ytdl(url, {
        format: 'mp4'
    }).pipe(res)
})

app.listen(port, () => {
    console.log('server has started!')
})