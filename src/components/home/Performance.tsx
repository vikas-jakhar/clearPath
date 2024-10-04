import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'

const Performance = () => {
    return (
        <div className='py-8'>
            <div className="container my-0.5">
                <span className='flex mx-auto text-deep-blue font-messiri font-normal text-sm w-fit py-2 px-3.5 border border-off-blue bg-light-sky rounded-lg text-center'>Performance Marketing Agency</span>
                <PrimaryHeading className='mt-2.5 text-center text-deep-blue' text='Why Webserv?' />
                <PrimaryParagraph className='mt-4 text-center mx-auto max-w-[800px]' data='We use a data driven approach to deliver qualified leads at a fraction of the price of the competition. Our approach relies on first and third party data to target the right people at the right time.' />
                <div className="mt-10 flex flex-wrap flex-row -mx-3">
                    <div className="w-4/12 px-3">
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance