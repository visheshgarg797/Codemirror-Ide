import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../context/themeProvider";
import { DirectionProvider } from "@/context/directionProvider";
import { EditorModeProvider } from "@/context/editorModeProvider";
import { AnalysisProvider } from "@/context/ananlysisSubheading";
import { IntroProvider } from "@/context/introSubheading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codemirror IDE",
  description: "Online ide with different custom features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <IntroProvider>
        <AnalysisProvider>
          <EditorModeProvider>
            <ThemeProvider>
              <DirectionProvider>
                <body className={inter.className}>{children}</body>
              </DirectionProvider>
            </ThemeProvider>
          </EditorModeProvider>
        </AnalysisProvider>
      </IntroProvider>
    </html>
  );
}
