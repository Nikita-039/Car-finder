import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import AppNavbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <AppNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
    </div>
  );
}
