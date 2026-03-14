
export async function POST(req: Request) {
  const { name, phone, table } = await req.json();

  // Normally here you would:
  // 1️⃣ Save booking in your DB
  // 2️⃣ Create payment in Bank of Georgia API (or TBC)
  // 3️⃣ Get payment URL

  // For demo, let's pretend the bank returned this payment URL
  const paymentUrl = "https://payment.bog.ge/checkout/demo123";

  // You can also log booking info in console for demo
  console.log("New booking:", { name, phone, table, amount: 15 });

  return new Response(
    JSON.stringify({ message: "Booking received", paymentUrl }),
    { status: 200 }
  );
}