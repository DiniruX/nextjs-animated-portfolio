import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diniru's Portfolio",
  description:
    "Hey there, It's Diniru Sandipa, Associate Software Engineer at CodeHub SL. For the past 4 years, I have embarked on a fullstack softwar engineer journey that has led me to work remotely with various agencies and collaborate with skilled individuals in the creation of digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
