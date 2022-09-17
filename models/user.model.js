import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    phone_number: {
      type: String,
      required: [true, 'Please enter a valid phone number'],
    },
    email: {
      type: String,
      required: [true, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a valid password'],
    },
    otp: {
      type: String,
      expires: '2m',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
