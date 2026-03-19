"use client";

import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [err, setErr] = useState("");

  async function sendMail() {
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      message.length === 0 ||
      mail.length === 0
    ) {
      return setErr("გთხოვთ შეავსოთ ყველა ველი !");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      return setErr("გთხოვთ მიუთითოთ ვალიდური ელექტრონული ფოსტა !");
    }
    
    const res = await fetch("http://localhost:3000/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, message, name, lastname: lastName }),
    });

    const data = await res.json();

    if (data.success) {
      alert("თქვენი წერილი გაიგზავნა!, დაელოდეთ პასუხს.");
    }
  }

  return (
    <form className="lg:w-110 w-full flex flex-col gap-3">
      <div className="w-full flex lg:gap-13 gap-9">
        <div className="lg:w-50 w-35 flex flex-col text-[#D93D00]">
          <label className="lg:text-[20px]">სახელი</label>
          <input
            type="text"
            value={name}
            className="h-8.5 border-2 text-[#4e4e4e] px-1"
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setErr("")}
          />
        </div>
        <div className="lg:w-50 w-35 flex flex-col text-[#D93D00]">
          <label className="lg:text-[20px]">გვარი</label>
          <input
            type="text"
            value={lastName}
            className="h-8.5 border-2 text-[#4e4e4e] px-1"
            onChange={(e) => setLastName(e.target.value)}
            onFocus={() => setErr("")}
          />
        </div>
      </div>
      <div className="w-full flex flex-col text-[#D93D00]">
        <label className="text-[20px]">ელექტრონული ფოსტა</label>
        <input
          type="mail"
          value={mail}
          className="h-8.5 border-2 text-[#4e4e4e] px-1"
          onChange={(e) => setMail(e.target.value)}
          onFocus={() => setErr("")}
        />
      </div>
      <div className="w-full flex flex-col text-[#D93D00]">
        <label className="text-[20px]">წერილი</label>
        <textarea
          value={message}
          className="h-20 border-2 text-[#4e4e4e] px-1"
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setErr("")}
        />
      </div>
      {err.length > 0 && <div className="text-red-600">{err}</div>}
      <div className="w-full flex justify-end">
        <button
          type="button"
          className="px-3.75 py-1.5 bg-[#D93D00] text-amber-50 text-[20px]"
          onClick={sendMail}
        >
          გაგზავნა
        </button>
      </div>
    </form>
  );
}
