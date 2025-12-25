import { useState, useEffect } from 'react';

export const WelcomeScreen = ({ onComplete }) => {
    const [isExit, setIsExit] = useState(false);

    useEffect(() => {
        // Wait for zoom animation to finish before exiting
        const timer = setTimeout(() => {
            setIsExit(true);
            setTimeout(onComplete, 800); // Window slide up duration
        }, 2500); // Duration of the zoom + a little hold time

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-transform duration-700 ease-in-out ${isExit ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="relative z-10">
                <h1 className="text-4xl md:text-7xl font-bold font-mono text-primary animate-zoom-in tracking-widest text-center">
                    PORTFOLIO
                </h1>
                {/* Optional: Add a subtle loading bar or flashing cursor below if needed */}
            </div>

            {/* Decorative scanline and grid */}
            <div className="absolute inset-0 pointer-events-none bg-grid opacity-10" />
            <div className="absolute inset-0 pointer-events-none animate-scanline bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[100px] w-full" />
        </div>
    );
};
