const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');

// Middleware setup
const setupMiddleware = (app) => {
	app.use(cors());
	app.use(express.json());
};

// Route setup
const setupRoutes = (app) => {
	app.use('/user', userRoutes);
};

// Start server
const startServer = async () => {
	try {
		await connectDB();
		setupMiddleware(app);
		setupRoutes(app);

		const PORT = process.env.PORT || 5000;
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error('Failed to start the server:', error.message);
		process.exit(1);
	}
};

startServer();
