const userService = require('../services/user.service');

const authMiddleware = async (req, res, next) => {
	const token = req.headers.authorization?.split('Bearer ')[1];

	if (!token) {
		return res.status(401).json({ message: 'Unauthorized: No token provided' });
	}

	try {
		const decodedToken = await userService.verifyFirebaseToken(token);
		if (!decodedToken) {
			return res.status(401).json({ message: 'Unauthorized: Invalid token' });
		}
		const user = await userService.getOrCreateUser(decodedToken);
		req.user = user;
		next();
	} catch (error) {
		return res.status(403).json({ message: 'Forbidden: Invalid token' });
	}
};

module.exports = authMiddleware;
