const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()

const port = 3000

app.get('/video', (req, res) => {
    const url = req.query.url
    
    res.header('Content-Dispotion', 'attachment;fileName="video.mp4"')

    ytdl(url, {
        format: 'mp4'
    }).pipe(res)
})

app.listen(port, () => {
    console.log('server has started!')
})