import { useCustomTheme } from "@/context/useThemeHook";

export default function Footer() {
  const { themeStyles } = useCustomTheme();
  return (
    <footer
      className="bg-gray-800 py-0 px-8 absolute bottom-0 left-0 w-full"
      style={{ backgroundColor: themeStyles.col01.backgroundColor }}
    >
      <div className="container mx-auto">
        <p className="text-center" style={{ color: themeStyles.col01.color }}>
          © 2023 Sprinklr Interns . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
