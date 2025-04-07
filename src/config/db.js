const mongoose = require('mongoose');

const connectDB = async (retries = 5, delay = 5000) => {
	while (retries) {
		try {
			await mongoose.connect(process.env.MONGODB_URL, {});
			console.log('MongoDB connected successfully');
			break;
		} catch (error) {
			retries -= 1;
			if (error.message.includes('bad auth')) {
				console.error('MongoDB connection failed: Authentication failed. Please check your credentials.');
				process.exit(1);
			} else {
				console.error(`MongoDB connection failed: ${error.message}. Retries left: ${retries}`);
				if (!retries) process.exit(1);
				await new Promise((res) => setTimeout(res, delay));
			}
		}
	}
};

module.exports = connectDB;
