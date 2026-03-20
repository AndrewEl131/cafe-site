import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import menuCategory from "@/models/MenuCategory";

export async function GET() {
  await connectToDB();
  const menu = await menuCategory.find();
  return NextResponse.json(menu);
}

export async function POST(req: Request) {
  await connectToDB();

  const { kaTitle, enTitle, items } = await req.json();

  const newMenuCategory = await menuCategory.create({
    kaTitle,
    enTitle,
    items,
  });

  return NextResponse.json(newMenuCategory);
}
