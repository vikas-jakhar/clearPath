'use client';
import React, { useState, useRef } from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { ACCORDION_DATA } from '@/utils/Helper';
import Icon from '../common/Icons';

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const getHeight = (index: number) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index]?.scrollHeight + 'px';
        }
        return '0px';
    };
    return (
        <div className='sm:py-14 py-5'>
            <div className="container">
                <PrimaryHeading className='text-center' text='Frequently Asked Question' />
                <PrimaryParagraph className='md:mt-5 mt-2.5 text-center mx-auto max-w-[627px]' data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <div className="lg:mt-11 md:mt-8 sm:mt-5 mt-3">
                    {ACCORDION_DATA.map((item, index) => (
                        <div data-aos="flip-up" key={index}>
                            <div className="overflow-hidden flex mx-auto max-w-[961px] border bg-light-gray border-deep-blue rounded-[10px] sm:mt-3 mt-2 md:mt-5 justify-center relative duration-300 ease-linear" >
                                <div className="accordion w-full">
                                    <div
                                        role="button"
                                        className="duration-300 ease-linear rounded relative z-[1] flex items-center justify-between gap-1.5 cursor-pointer sm:py-[18px] p-2 sm:px-5"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <h3 className="font-normal font-messiri text-base sm:text-xl text-black opacity-80">
                                            {item.title}
                                        </h3>
                                        <Icon className={`transition_slow w-5 ${openIndex === index ? '' : 'rotate-180'}`} iconName={openIndex === index ? 'accordionIcon' : 'plusIcon'} />
                                    </div>
                                    <div
                                        ref={(el: HTMLDivElement | null) => {
                                            contentRefs.current[index] = el;
                                        }}
                                        className={`accordion-content max-h-0 overflow-hidden duration-300 ease-linear ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                        style={{
                                            maxHeight: openIndex === index ? getHeight(index) : '0px',
                                        }}
                                    >
                                        <div className="flex items-start sm:px-5 px-2 pb-2 sm:pb-5 -mt-0.5 w-full">
                                            <PrimaryParagraph className='max-w-[672px]' data={item.content} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq