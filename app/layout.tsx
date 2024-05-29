"use client"
import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "desgy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})

{
  

  return (
    <html lang="en">
      <head>
        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body style={{ overflowX: "hidden" }}>
        <Navbar/>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
