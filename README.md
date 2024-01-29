# nodejs_message_board

## Technologies Used
Javascript, NodeJS, Express, React, Vite

## Overview
The app consists of a React frontend (scaffolded with Vite) and a NodeJS/Express backend (no scaffolding used).
The backend and frontend are placed in the backend/ and frontend/ folders, respectively.

The backend structure is as follows:
- backend/server.js is the Express app;
- backend/routes/messages.js is the Express router used in server.js;
- backend/controllers/messageCOntroller.js is the controller called by messages.js;
- backend/data/messagesDb.js is the in-memory database containing arrays of channel and message objects.

The frontend structure is as follows:
- frontend/src/App.jsx is the root React component;
- frontend/src/components/MessageBoard.jsx is the parent component for the three message board panels
  (ChannelList.jsx, MessageEditor.jsx and MessageView.jsx, which can be found in the same folder).
  MessageBoard.jsx handles all the states and passes them down to the child components.

## Usage
1. Navigate to backend/, run `npm install`, then run `npm start`. The backend server will start on http://localhost:7777.
2. Navigate to frontend/, run `npm install`, then run `npm run dev`. The React app will start on http://localhost:5173.

## Things That Don't Match the Specification
- The message object contains not only the text, but also the message's Id along with the Id of the channel it belongs to.
  I used those Ids essentially as primary/foreign keys for the in-memory database, as well as for setting the key property 
  when listing channels/messages in React. I assume those properties won't be needed with an actual database (as they will 
  be generated automatically); 

- I hope that otherwise I've followed the specs properly.