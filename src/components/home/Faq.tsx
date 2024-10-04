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
        <div className='py-16'>
            <div className="container">
                <PrimaryHeading className='text-center text-deep-blue' text='Frequently Asked Question' />
                <PrimaryParagraph className='md:mt-5 mt-2.5 text-center mx-auto max-w-[627px]' data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <div className="mt-11">
                    {ACCORDION_DATA.map((item, index) => (
                        <div data-aos="flip-up" key={index}>
                            <div className="overflow-hidden flex mx-auto max-w-[961px] border bg-light-gray border-deep-blue rounded-[10px] mt-5 justify-center relative duration-300 ease-linear" >
                                <div className="accordion w-full">
                                    <div
                                        role="button"
                                        className="duration-300 ease-linear rounded relative z-[1] flex items-center justify-between gap-1.5 cursor-pointer py-[18px] px-5"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <h3 className="font-normal font-messiri text-base sm:text-xl max-w-[249px] sm:max-w-full text-black opacity-80">
                                            {item.title}
                                        </h3>
                                        <Icon className={openIndex === index ? 'transition_slow' : 'transition_slow rotate-180'} iconName={openIndex === index ? 'accordionIcon' : 'plusIcon'} />
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
                                        <div className="flex items-start px-5 pb-5 -mt-0.5 w-full">
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