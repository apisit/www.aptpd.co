import localFont from "next/font/local";
import "./globals.css";



const atkinsons = localFont({
  src: [
    {
      path: "./fonts/Atkinson-Hyperlegible-Regular-102.woff",
      weight: "400",
    },
    {
      path: "./fonts/Atkinson-Hyperlegible-Bold-102.woff",
      weight: "700",
    }
  ],
  variable: '--font-hyperlegible'

});




export const metadata = {
  title: "APTPD",
  description: "Software Development Agency in Japan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${atkinsons.variable} antialiased absolute inset-0`}
      >
        {children}
      </body>
    </html>
  );
}
