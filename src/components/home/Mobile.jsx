import Image from 'next/image'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'

const Mobile = () => {
    return (
        <div className='lg:py-24 md:py-20 sm:py-16 py-14'>
            <div className="container my-0.5">
                <div className="bg-off-blue bg-mobile-layer lg:flex-row flex-col bg-cover bg-no-repeat bg-center gap-5 md:gap-9 xl:-mx-9 sm:py-10 p-2 sm:px-7 xl:px-9 rounded-[22px] flex justify-between items-center">
                    <div className="max-w-[461px] border border-deep-blue rounded-xl overflow-hidden flex">
                        <Image src='/assets/images/webp/mobile-img.png' className='w-full scale-105 hover:scale-110 transition_slow' alt='mobile-img' width={923} height={774} priority />
                    </div>
                    <div className="max-w-[623px] w-full flex flex-col items-center lg:items-start">
                        <PrimaryHeading className='text-white text-center lg:text-left' text='Webserv’s efforts have increased mobile conversion rates and reduced ad spending by 61% and 20%, respectively.' />
                        <PrimaryParagraph className='text-off-white text-center lg:text-left mt-5 lg:mt-10' data='Sergei Vidov' />
                        <PrimaryParagraph className='text-off-white text-center lg:text-left mt-2.5' data='CEO - Summit Estate Recovery Center' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile