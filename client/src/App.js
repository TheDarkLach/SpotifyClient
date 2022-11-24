import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';
import React, { useState, useEffect } from 'react';
import './darkMode.css';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.body.className = theme;
    }, [theme]);
  return code ? <Dashboard code={code} /> : <Login />;

}

export default App;
