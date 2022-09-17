var config = {
    method: "post",
    url: `https://account.kudisms.net/api/?username=abayomiogunnusi@gmail.com&password=Bassguitar1&message= ${listing.propertyName.toUpperCase()} has been booked, the access-key is ${OTP}. This will be presented by the user&sender=Spaceet&mobiles=0${
      listing.displayName.phone_number
    } on arrival`,
    headers: {},
};
const resp = await axios(config);