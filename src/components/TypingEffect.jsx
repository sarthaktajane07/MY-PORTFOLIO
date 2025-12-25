import { useState, useEffect } from 'react';

export const TypingEffect = ({ text, speed = 100, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => {
                if (index < text.length) {
                    index++;
                    return text.slice(0, index);
                }
                clearInterval(intervalId);
                return prev;
            });
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, started]);

    return (
        <span className="inline-block">
            {displayedText}
            <span className="animate-pulse text-primary font-bold">|</span>
        </span>
    );
};
