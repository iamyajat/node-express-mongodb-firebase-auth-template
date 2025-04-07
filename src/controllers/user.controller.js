const userService = require('../services/user.service');

const updateProfile = async (req, res) => {
  const { username, displayName, photoURL } = req.body;

  if (!username && !displayName && !photoURL) {
    return res.status(400).json({ message: 'No fields to update' });
  }

  try {
    const updatedUser = await userService.updateUserProfile(req.user.uid, { username, displayName, photoURL });
    return res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { updateProfile };
