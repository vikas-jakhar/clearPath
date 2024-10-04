import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'
import { PAYING_DATA } from '@/utils/Helper'

const Dollar = () => {
    return (
        <div className='lg:py-24 md:py-20 sm:py-16 py-14'>
            <div className="container">
                <PrimaryHeading className='mx-auto text-center text-deep-blue' text='Stop Paying Top Dollar For Poor Leads' />
                <PrimaryParagraph className='mx-auto max-w-[836px] text-black mt-2 sm:mt-4 text-center' data='Leverage seasoned industry marketers to position your center as the go-to for treatment seekers and seamlessly transition them to admissions experts for maximum facility growth.' />
                <div className="md:mt-10 sm:mt-7 mt-5 mx-auto lg:flex-row flex-col justify-center items-center gap-5 sm:gap-10 lg:gap-0 max-w-[1016px] w-full flex lg:justify-between">
                    <Image src='/assets/images/webp/men-img.webp' className='max-w-[348px] w-full' alt='men-img' width={696} height={814} priority />
                    <div className="flex flex-col justify-center max-w-[558px] w-full">
                        {PAYING_DATA.map((item, idx) => (
                            <div key={idx} className={`w-full rounded-xl h-full bg-off-white shadow-3xl p-2 sm:p-5 flex gap-2.5 items-start ${idx === 1 ? "sm:mt-5 mt-3" : ""}`}>
                                <Image src={idx === 0 ? "/assets/images/svg/pay-icon.svg" : "/assets/images/svg/stamp-icon.svg"} alt='icon' width={30} height={30} priority />
                                <div className="flex flex-col">
                                    <h2 className='font-semibold font-messiri text-lg sm:text-xl md:text-2xl text-deep-blue'>{item.title}</h2>
                                    <PrimaryParagraph className='lg:mt-3 md:mt-2 mt-1 text-deep-blue' data={item.text} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dollar