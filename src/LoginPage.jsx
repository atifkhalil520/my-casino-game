import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  console.log("✅ LoginPage Render ہو رہا ہے!"); // Debugging Log

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    if (phoneNumber.length === 11) {
      console.log("✅ User Logged In!"); // Debugging Log
      onLogin();
    } else {
      alert("براہ کرم درست 11 ہندسوں کا فون نمبر درج کریں!");
    }
  };

  return (
    <div className="login-container">
      {/* 🎥 MP4 Video Background */}
      <video autoPlay loop muted playsInline className="login-video">
        <source src="/background.mp4" type="video/mp4" />
        آپ کا براؤزر ویڈیو سپورٹ نہیں کرتا۔
      </video>

      {/* ✅ Debugging: Check if login-box is rendering */}
      {console.log("✅ login-box Render ہو رہا ہے!")}

      <div className="login-box">
        <h2>🔐 Login to Continue</h2>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;





