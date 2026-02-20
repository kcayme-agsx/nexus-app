import useTheme from "../hooks/useTheme";
import Icon from "./Icon";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 transition-colors ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Icon name={theme === "dark" ? "light_mode" : "dark_mode"} />
    </button>
  );
}
