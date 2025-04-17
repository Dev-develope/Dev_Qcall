'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Partners from './Partners';
import Avetar1 from "../../../public/images/LandingPage/avatar-small-01.png"
import Avetar2 from "../../../public/images/LandingPage/avatar-small-02.png"
import Avetar3 from "../../../public/images/LandingPage/avatar-small-03.png"
const testimonials = [
    {
        quote:
            'QCall AI has transformed our outreach! Outbound calls are quick and personalised, helping us connect with customers more effectively.',
        author: 'Eddkne Helen',
        role: 'CEO & Founder',
        company: 'strideUX',
        image: Avetar1,
    },
    {
        quote:
            'QCall AI has transformed Your Buisness! Outbound calls are quick and personalised, helping us connect with customers more Effectively.',
        author: 'joss',
        role: 'CEO & Founder',
        company: 'strideUX',
        image: Avetar2,
    },
    {
        quote:
            'QCall AI Modern world Calling problem solution provider! Outbound calls are quick and personalised, helping us connect with customers more effectively.',
        author: 'Jhon ',
        role: 'CEO & Founder',
        company: 'strideUX',
        image: Avetar3,
    }
];


export default function LogoSlider({ avetar }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [testimonials.length]);

    return (
        <div className='bg-[#f9f9f9] py-10'>
            <div className=" container mx-auto overflow-hidden max-w-3xl px-5">
                <Partners />
            </div>
            <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-5">
                <div className="max-w-3xl">
                    <p className="text-4xl font-medium text-gray-900">
                        <span className="text-gray-400 text-3xl">“</span>
                        {testimonials[current].quote.split(/(quick|personalised|more|effectively)/g).map((word, i) => (
                            <span
                                key={i}
                                className={
                                    ['quick', 'more'].includes(word)
                                        ? 'text-[#3cadd63d]'
                                        : ['personalised', 'effectively'].includes(word)
                                            ? 'text-[#00a7e6]'
                                            : ''
                                }
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </div>

                <div className='flex justify-between max-w-3xl mt-5 container mx-auto'>
                    <div className="mt-6 flex gap-4">
                        <Image
                            src={testimonials[current].image}
                            alt={testimonials[current].author}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
                            <p className="text-sm text-gray-500">
                                {testimonials[current].role} @ {testimonials[current].company}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`h-2 w-6 rounded-full transition-colors ${current === i ? 'bg-[#00a7e6]' : 'bg-pink-200'
                                    }`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}








