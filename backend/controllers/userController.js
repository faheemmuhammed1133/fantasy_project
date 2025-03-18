import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// Create a new user
export const createUser = async (req, res) => {
  try {
    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    // Create a new user with hashed password
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract user ID from the request params

    // Find the user by ID and update it
    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body, 
      { new: true } 
    );

    if (!updatedUser) {
      
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser, 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



// Login function to compare passwords
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found , Please register First' });
    }

    // Compare password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Password matched
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


