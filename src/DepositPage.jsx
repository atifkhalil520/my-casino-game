import React, { useState } from "react";

const DepositPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("easypaisa");
  const [screenshot, setScreenshot] = useState(null);
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const easypaisaNumbers = ["03001234567", "03007654321", "03001112233", "03009876543", "03005556677"];
  const jazzcashNumbers = ["03111223344", "03115556677", "03117778899", "03119998877", "03112224455"];

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleDepositRequest = () => {
    if (!amount || !transactionId || !screenshot) {
      alert("براہ کرم تمام تفصیلات بھریں!");
      return;
    }
    
    alert("آپ کی Deposit Request Admin کے پاس جا چکی ہے!");
    setAmount("");
    setTransactionId("");
    setScreenshot(null);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">💰 Deposit Coins</h2>
      <p className="text-gray-600 mb-2">براہ کرم نیچے اپنا Payment Method منتخب کریں:</p>
      <select 
        className="w-full p-2 border rounded mb-4"
        value={selectedMethod}
        onChange={(e) => setSelectedMethod(e.target.value)}
      >
        <option value="easypaisa">EasyPaisa</option>
        <option value="jazzcash">JazzCash</option>
      </select>
      
      <p className="text-gray-700 font-bold">نیچے اپنے Payment کے لیے نمبر منتخب کریں:</p>
      <ul className="list-disc pl-5 mb-4">
        {(selectedMethod === "easypaisa" ? easypaisaNumbers : jazzcashNumbers).map((number, index) => (
          <li key={index} className="text-blue-500">{number}</li>
        ))}
      </ul>
      
      <input 
        type="number" 
        placeholder="Amount (PKR)" 
        className="w-full p-2 border rounded mb-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Transaction ID" 
        className="w-full p-2 border rounded mb-3"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
      />
      <input 
        type="file" 
        className="w-full p-2 border rounded mb-3"
        onChange={handleFileChange}
      />
      
      <button 
        className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600"
        onClick={handleDepositRequest}
      >
        Deposit Request بھیجیں
      </button>
    </div>
  );
};

export default DepositPage;
