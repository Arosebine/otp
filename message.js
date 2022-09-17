import otpGenerator from 'otp-generator';
let OTP = otpGenerator.generate(6, {
  upperCaseAlphabets: false,
  specialChars: false,
});

let message = `Thanks for signing up, your pass is ${OTP}`;

// const multiply = 3.2 * 7;
// console.log(multiply);
// console.log(Math.floor(multiply));
// let otp2 = Math.floor(Math.random() * 99999) + Math.ceil(Math.random() * 99999);
// console.log({ otp2 });

// let num1 = Math.random() * 99999;
// let num2 = Math.ceil(Math.random() * 99999);
// let result = num1 + num2;
// let floored_result = Math.floor(result);
// console.log(floored_result);

// export default message;
export { message, OTP };
// export default message;

// TODO: COMMON JS
// module.exports = message;
// export.message

// module.exports = {
//   signUp,
//   login,
//   verifyEmail,
// };
