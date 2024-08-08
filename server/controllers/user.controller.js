import User from '../model/user.model.js';

const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ userName: req.body.userName });
    if (exist) {
      return res.status(401).json({ message: 'Username already exist' });
    }

    const user = req.body;
    const newUser = new User(user);
    newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default userSignup;
