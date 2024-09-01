import User from '../model/user.model.js';

export const userSignup = async (req, res) => {
  try {
    const usernameExist = await User.findOne({ userName: req.body.userName });
    if (usernameExist) {
      return res.status(401).json({ message: 'Username already exist' });
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(401).json({ message: 'This Email already exist.' });
    }

    const user = req.body;
    const newUser = new User(user);
    newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      userName: username,
      password: password,
    });
    console.log(username, password);
    if (!user) {
      return res.status(401).json('user does not exist');
    }
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(401).json('invilaid user name or password');
    }
  } catch (error) {
    return res.status(500).json('Error: ', error.message);
  }
};
