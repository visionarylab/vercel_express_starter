const ytdl = require('ytdl-core');
const cors = require('cors');
const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    URL = "https://www.youtube.com/watch?v=oQ78byewHWY";
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);

});
    

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})