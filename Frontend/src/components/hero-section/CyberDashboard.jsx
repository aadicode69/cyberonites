import { useEffect, useRef } from 'react';
import './CyberDashboard.css';

const CyberDashboard = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        
        // Generate elements only for the circle components
        const generateElements = () => {
            try {
                const f2 = container.querySelector('#f2');
                const f1 = container.querySelector('#f1');
                const f5 = container.querySelector('#f5');

                if (f2 && f2.children.length === 0) {
                    for (let i = 1; i < 25; i++) {
                        const span = document.createElement('span');
                        span.className = `f2${i}`;
                        span.style.transform = `rotateZ(${i * 15}deg) translateY(120px)`;
                        f2.appendChild(span);
                    }
                }

                if (f1 && f1.children.length === 0) {
                    for (let i = 1; i < 9; i++) {
                        const span = document.createElement('span');
                        span.className = `f1${i}`;
                        span.style.transform = `rotateZ(${i * 45}deg) translateY(140px)`;
                        f1.appendChild(span);
                    }
                }

                if (f5 && f5.children.length === 0) {
                    for (let i = 1; i < 13; i++) {
                        const span = document.createElement('span');
                        const b = document.createElement('b');
                        b.textContent = Math.floor(Math.random() * 30);
                        span.className = `f5${i}`;
                        span.style.transform = `rotateZ(${i * 30}deg) translateY(60px)`;
                        span.appendChild(b);
                        f5.appendChild(span);
                    }
                }
            } catch (error) {
                console.warn('Circle generation error:', error);
            }
        };

        generateElements();
    }, []);

    return (
        <div ref={containerRef} id="cyber-container">
            <div id="figure">
                <div id="f1"></div>
                <div id="f2"></div>
                <div id="f3">
                    <div id="f31">
                        <span className="f311"><b></b></span>
                        <span className="f312"><b></b></span>
                    </div>
                    <div id="f32">
                        <span className="f321"></span>
                        <span className="f322"></span>
                    </div>
                    <div id="f33"></div>
                    <div id="f34"></div>
                </div>
                <div id="f4">
                    <div id="f41"></div>
                    <div id="f42"></div>
                    <div id="f43" className="f431"></div>
                    <div id="f43" className="f432"></div>
                    <div id="f43" className="f433"></div>
                    <div id="f43" className="f434"></div>
                </div>
                <div id="f5"></div>
                <div id="f6"></div>  
                <div id="f7">
                    <div id="f71"></div>
                    <div id="f72"></div>
                </div>
                <div id="f8">
                    <div id="f81"></div>
                    <div id="f82"></div>
                </div>
                <div id="f9">
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default CyberDashboard;