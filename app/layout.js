import { Toaster } from "sonner";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Product Feedback App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className}`}>{children}<Toaster position="top-center"/></body>
    </html>
  );
}
