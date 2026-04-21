import React from "react";
import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "მენიუ",
  description: "მენიუს გვერდი კაფე STREET#1-ის საიტიზე",
};

export default function menu() {
  return <MenuClient />;
}
