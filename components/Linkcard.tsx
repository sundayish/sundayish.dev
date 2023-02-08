import React from 'react';
import Link from "next/link";

interface Props {
    text: string;
    link: string;
}

const Linkcard = ({ text, link }: Props) => {

    return (
        <Link href={link}>
            <div className="relative h-full w-full cursor-pointer duration-300 ease-in-out hover:scale-105">
                <div className={`card h-full w-full`}>
                    <div className="p-3 bg-blue-500 text-center flex items-center text-white h-full w-full rounded-md">
                        <p className="font-semibold">{text}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Linkcard;