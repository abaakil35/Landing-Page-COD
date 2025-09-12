README for Backend API Project

This is a simple Node.js backend API for user registration and login using Express and MongoDB.

Prerequisites:
- Node.js installed
- MongoDB running on localhost:27017

Installation:
1. Install dependencies: npm install

Database Information:
- Database Name: testApi
- Collection Name: Users

How to Launch the Server:
1. Make sure MongoDB is running
2. For development (with auto-restart): npm run dev
3. For production: node index.js
4. The server will start on port 3000

API Endpoints:
- POST /register - Register a new user (requires email and password in JSON body)
- POST /login - Login a user (requires email and password in JSON body)
- GET / - Hello World endpoint

Example Request:
POST http://localhost:3000/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
