# chunk video player using Shaka Player


## App :
- cdn server (static server) act like cdn serve chunk file and manifest file
- client act like web app client


## 3rd Party
- Shaka Player
- ffmpeg
- go fiber
- react

## how to use & run

1. Place video inside videos folder
2. Run ``` sh generate.sh <output_video_name> <source_file>```
3. Replace url att client web app (src/app.js) with your <output_video_name>
4. Run cdn server with ``` cd cdn && go mod tidy && go run .  ```
5. Run WebApp Client ``` cd client && npm install && npm run start ```


