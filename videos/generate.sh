# mkdir $1 && ffmpeg -i $2 -c copy -map 0 -seg_duration 00:00:15 -b:v:0 800k -b:v:1 300k $1/manifest.mpd && ffmpeg -i $2 -ss 00:00:01.000 -vframes 1 $1/$1.png


mkdir $1
ffmpeg -i $2 \
  -map 0:v:0 -map 0:a\?:0 -map 0:v:0 -map 0:a\?:0  \
  -b:v:1 235k -c:v:1 libx264 -filter:v:1 "scale=-1:240"  \
  -b:v:2 1050k -c:v:2 libx264 -filter:v:2 "scale=-1:480" \
  -f dash $1/manifest.mpd