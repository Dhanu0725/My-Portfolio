import React, { useState, useEffect } from 'react';

const CustomTypewriter = ({ text, speed = 100, cursorColor = "#000" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isCursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        const type = () => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text[index]);
                index += 1;
                setTimeout(type, speed);
            }
        };

        type();

        // Blink cursor effect
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, speed / 2);

        return () => clearInterval(cursorInterval);
    }, [text, speed]);

    return (
        <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
            <span dangerouslySetInnerHTML={{ __html: displayedText }} />
            <span style={{ color: cursorColor, opacity: isCursorVisible ? 1 : 0 }}>|</span>
        </div>
    );
};

export default CustomTypewriter;
