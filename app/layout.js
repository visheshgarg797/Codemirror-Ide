import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/themeProvider";
import DirectionModeState from "../context/DirectionModeState";
import EditorModeState from "../context/EditorModeState";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codemirror IDE",
  description: "Online ide with different custom features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DirectionModeState>
        <EditorModeState>
          <ThemeProvider>
            <body
              className={inter.className}
              style={{ backgroundColor: "#23272f" }}
            >
              {children}
            </body>
          </ThemeProvider>
        </EditorModeState>
      </DirectionModeState>
    </html>
  );
}
