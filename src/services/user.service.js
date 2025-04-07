const admin = require('../config/firebase');
const User = require('../models/user.model');

const verifyFirebaseToken = async (token) => {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

const getOrCreateUser = async (firebaseUser) => {
  let user = await User.findOne({ uid: firebaseUser.uid });

  if (!user) {
    user = new User({
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      username: firebaseUser.email.split('@')[0],
      displayName: firebaseUser.name || '',
      photoURL: firebaseUser.picture || ''
    });
    await user.save();
  }

  return user;
};

const updateUserProfile = async (uid, updates) => {
  const allowedUpdates = ['username', 'displayName', 'photoURL'];
  const filteredUpdates = Object.keys(updates)
    .filter(key => allowedUpdates.includes(key) && updates[key] !== undefined)
    .reduce((obj, key) => {
      obj[key] = updates[key];
      return obj;
    }, {});

  if (Object.keys(filteredUpdates).length === 0) {
    throw new Error('No valid fields to update');
  }

  const user = await User.findOneAndUpdate({ uid }, filteredUpdates, { new: true });
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

module.exports = { verifyFirebaseToken, getOrCreateUser, updateUserProfile };
