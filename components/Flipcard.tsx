import React, { useState } from 'react';

interface Props {
    imgSrc: string;
    text: string;
    imgAlt: string;
    flipped?: boolean;
}

const Card = ({ imgSrc, imgAlt, text, flipped }: Props) => {
    const [isFlipped, setIsFlipped] = useState(flipped);

    return (
        <div className="relative h-full w-full cursor-pointer">
            <div className={`card h-full w-full transform transition duration-300 ease-in-out hover:scale-105 ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
                <div className="card-front w-full h-full bg-pink-500 rounded-md">
                    <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
                </div>
                <div className="card-back p-1 bg-blue-500 text-center flex items-center text-white h-full w-full rounded-md">
                    <p className="font-semibold">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;