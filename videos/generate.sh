mkdir $1 && ffmpeg -i $2 -c copy -map 0 $1/manifest.mpd && ffmpeg -i $2 -ss 00:00:01.000 -vframes 1 $1/$1.png

