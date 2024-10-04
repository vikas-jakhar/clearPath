import Image from 'next/image'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'

const Accountability = () => {
    return (
        <div className='lg:py-24 md:py-20 sm:py-16 py-14'>
            <div className="container my-0.5">
                <div className="flex justify-between lg:flex-row flex-col items-center gap-6 sm:gap-10">
                    <div data-aos='zoom-in' className="max-w-[543px] w-full flex flex-col items-center lg:items-start">
                        <span data-aos='zoom-in' className='flex text-deep-blue font-messiri font-normal text-sm w-fit py-2 px-3.5 border border-off-blue bg-light-sky rounded-lg text-center'>Why ClearPath?</span>
                        <PrimaryHeading className='mt-2.5 text-center lg:text-left text-deep-blue' text='Transparency & Accountability' />
                        <PrimaryParagraph className='sm:mt-4 text-center lg:text-left mt-2' data='Gain real-time access to all operational data through our dashboard, which allows for immediate insights and strategic decision making. We ensure full transparency in our processes and provide concrete evidence of our effectiveness and integrity.' />
                    </div>
                    <div data-aos='zoom-in' className="max-w-[524px] shadow-3xl border border-deep-blue rounded-xl overflow-hidden flex">
                        <Image src='/assets/images/webp/data-img.webp' className='w-full hover:scale-105 transition_slow' alt='data-img' width={1048} height={702} priority />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accountability