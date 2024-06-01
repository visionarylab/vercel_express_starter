const ytdl = require('ytdl-core');

export default function handler(request, response) {
    const { name = 'World' } = request.query;
    var URL = req.query.URL;
    URL = "https://www.youtube.com/watch?v=oQ78byewHWY";
    response.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(response);
}