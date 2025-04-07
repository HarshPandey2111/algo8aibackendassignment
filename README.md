# Node.js Authentication Application

A complete authentication system built with Node.js, Express, MongoDB, and JWT.

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- User profile management
- Clean and responsive UI

## Prerequisites

- Node.js (v12 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd node-auth-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/node-auth-app
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### User
- GET `/api/users/me` - Get current user profile
- GET `/api/users/:id` - Get user profile by ID
- PUT `/api/users/profile` - Update user profile

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes
- Session management
- Input validation

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- EJS
- bcryptjs
- express-session
- connect-flash

## License

MIT 