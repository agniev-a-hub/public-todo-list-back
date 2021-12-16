_______##Project initialisation##_______

npm init

_______##Dependencies##_______

npm install typescript express config cors express mongoose bcrypt jsonwebtoken lodash nanoid ts-node

_______##Dev dependencies##_______

npm install @types/body-parser @types/config @types/cors @types/express @types/node @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node typescript -D

_______##typescriptconfig.ts initialisation##_______

npx tsc --init

_______#Possible error##_______

Encoding error -> /home/aalex/-PET-MERN..TS..todo-list/node_modules/mongodb-connection-string-url/node_modules/whatwg-url/lib/encoding.js -> add:
const {TextDecoder, TextEncoder} = require("util");
Solution found: 

_______##package.json start setup##_______

"scripts": {
    "start": "ts-node-dev --respawn --transpile-only src/app.ts"
}


16.12.2021 -> 
CreatePostController
Proceed with adding new routers for the /api
Create sessions model
Create User model
-->>