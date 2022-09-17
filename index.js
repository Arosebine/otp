import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';
import User from './models/user.model.js';
import { message, OTP } from './message.js';
import connectDb from './db/db.js';
import bcrypt from 'bcrypt';
let { PASSWORD, EMAIL } = process.env;

const app = express();
app.use(express.json());

connectDb();
const port = process.env.PORT || 98;

app.get('/', (req, res) => {
  res.send({ message: '😎😎😎😎😎😎😎😎😎😎' });
});

app.post('/otp', async (req, res) => {
  const { phone_number, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashOtp = await bcrypt.hash(OTP, salt);

    const user = await User.create({
      phone_number,
      email,
      password: hashPassword,
      otp: hashOtp,
    });

    let user_number = user.phone_number;
    console.log(user_number);
    var config = {
      method: 'post',
      url: `https://account.kudisms.net/api/?username=${EMAIL}&password=${PASSWORD}&message=${message}&sender=[insert sender here]&mobiles=0${user_number}`,
      headers: {},
    };
    const resp = await axios(config);
    console.log(resp);

    //TODO: password

    return res.status(201).json({
      message: 'User successfully created',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
