
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function DarkModeToggle({ setDarkMode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode') === 'true';
    setIsDark(stored);
    setDarkMode(stored);
  }, [setDarkMode]);

  const toggleMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <Button variant={isDark ? 'light' : 'dark'} onClick={toggleMode}>
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </Button>
  );
}
