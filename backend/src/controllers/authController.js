import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { jwtSecret } from '../config.js';

// User Registration
export const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      email,
      password,
      name,
    });

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign JWT and send response
    jwt.sign(payload, jwtSecret, { expiresIn: '1d' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// User Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign JWT and send response
    jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Linking UPI and Metamask
export const linking = async (req, res) => {
  try {
    const { email, upi, metamask } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Update user with UPI and Metamask details
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          upiId: upi,
          metamaskId: metamask,
        },
      },
      { new: true } // return updated user
    );

    if (!updatedUser) {
      return res.status(500).json({ message: 'Failed to update user' });
    }
    return res.status(200).json({ message: 'Links updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Server error while updating links' });
  }
};

// Update User Details
export const update = async (req, res) => {
  try {
    const { name, email, mob, age, dob, address, status } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Update user details
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          name,
          mobile: mob,
          age,
          dob,
          address,
          status,
        },
      },
      { new: true } // return updated user
    );

    if (!updatedUser) {
      return res.status(500).json({ message: 'Failed to update user details' });
    }
    return res.status(200).json({ message: 'User details updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Server error while updating user details' });
  }
};
