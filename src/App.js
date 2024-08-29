import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    return (
        <div className={darkMode ? 'App dark-mode' : 'App'}>
            <Header toggleTheme={toggleTheme} />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
            <button
                className="scrollTop"
                onClick={scrollTop}
                style={{ display: showScroll ? 'flex' : 'none' }}
            >
                &#8679;
            </button>
        </div>
    );
}

export default App;
