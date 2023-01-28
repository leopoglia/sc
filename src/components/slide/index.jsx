import React, { useState, useEffect } from 'react';
import './style.css';

export default function ImageCarousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % props.images.length);
        }, 8000);
        setIntervalId(id);
        return () => clearInterval(intervalId);
    }, [currentIndex, props.images.length]);

    return (
        <div className="image-carousel">
            <img src={props.images[currentIndex]} />
            <div className="text">
                <p>Deputado diz que bancada do agronegócio está ‘receosa’ e ‘assustada’ com governo Lula</p>

                <span>Há 30 minutos • Brasil</span>
            </div>
        </div>
    );
}
