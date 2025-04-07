# Node.js Express MongoDB Firebase Auth Template

This repository provides a boilerplate for building a Node.js application with Express, MongoDB, and Firebase Authentication. It includes user authentication, profile management, and database integration.

## Features

- Firebase Authentication for secure user login and registration.
- MongoDB integration for storing user data.
- RESTful API structure with Express.
- Middleware for authentication and error handling.
- Environment-based configuration using `.env` files.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas or a local MongoDB instance
- Firebase project with a service account key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-express-mongodb-firebase-auth-template.git
   cd node-express-mongodb-firebase-auth-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `MONGODB_URL` in `.env` with your MongoDB connection string.

4. Add your Firebase service account key:
   - Add `firebase.json` with your Firebase service account credentials.

## Usage

### Development

Start the development server with hot-reloading:
```bash
npm run dev
```

### Production

Start the production server:
```bash
npm start
```

## API Endpoints

### User Routes

- `PUT /user/update-profile`  
  Update the user's profile. Requires authentication.

## Project Structure

```
src/
├── config/         # Configuration files (Firebase, MongoDB)
├── controllers/    # Route controllers
├── middlewares/    # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── services/       # Business logic and Firebase integration
└── server.js       # Entry point of the application
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by [Yajat Malhotra](https://github.com/iamyajat).