import React, { useState } from "react";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOTP = () => {
    if (phone.length === 11) {
      setOtpSent(true);
      alert("✅ OTP Sent to WhatsApp: " + phone);
    } else {
      alert("❌ Please enter a valid 11-digit phone number!");
    }
  };

  const verifyOTP = () => {
    if (otp === "1234") {
      alert("✅ Login Successful!");
    } else {
      alert("❌ Invalid OTP, try again!");
    }
  };

  return (
    <div className="login-box">
      <h2>📱 Phone Number Login</h2>
      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={sendOTP}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default PhoneLogin;
