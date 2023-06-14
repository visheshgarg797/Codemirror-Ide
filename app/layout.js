import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codemirror IDE",
  description: "Online ide with different custom features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={inter.className}
          style={{ backgroundColor: "#23272f" }}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
