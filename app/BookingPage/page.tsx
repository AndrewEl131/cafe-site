"use client";

import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [table, setTable] = useState("");

  async function handleBooking() {
    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, table })
    });

    const data = await res.json();

    // redirect user to bank payment page
    if (data.paymentUrl) {
      window.location.href = data.paymentUrl;
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow font-['Radio_Canada_Big',sans-serif]">
      <h1 className="text-2xl mb-5">Reserve a Table</h1>

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Table Number"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />

      <button
        className="w-full bg-green-500 text-white p-2 rounded"
        onClick={handleBooking}
      >
        Pay 15₾ & Reserve
      </button>
    </div>
  );
}