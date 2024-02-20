# nodejs_message_board

## Technologies Used
Javascript, NodeJS, Express, React, Vite

## Overview
This app is a simple message board prototype.
It allows the user to switch among several channels and add messages to them.

The app consists of a React frontend (scaffolded with Vite) and a NodeJS/Express backend (no scaffolding used).
The backend and frontend are placed in the backend/ and frontend/ folders, respectively.

## Usage
1. Navigate to backend/, run `npm install`, then run `npm start`. The backend server will start on http://localhost:7777.
2. Navigate to frontend/, run `npm install`, then run `npm run dev`. The React app will start on http://localhost:5173.

## Further Improvements
1. Implement user authentication.
2. Replace the makeshift DB with SQLite, Redis, or something more fully fledged.
3. Dockerize the app.