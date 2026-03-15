# Technical task for doodle

Code is completed with React + TypeScript + Vite.

# To run project
- nodejs requiring version is 22.15.0.

- `npm install` install dependencies
- `npm run dev` to run project locally
- `npm run build` to build project.

# Implemented

- Loading chat's messages;
- Selecting name for chatting;
- Sending messages;
- Polling latest message every 1000ms;
- Storing environment variables in .env. Auth security token is storing in .env, it should be generated on server side for production version to keep secure communication within app.

# Not implemented

- Infinity scroll with virtualization based on pagination. Frontend is properly working with 50 limited messages. Existed backend provides messages in ASC by date, it means there are not fresh messages in the response of /messages. To avoid issues with workarounds like "missing messages", backend must update its API /messages by sending messages DESC by date. Only after this frontend could start working on pagination and virtualization.




