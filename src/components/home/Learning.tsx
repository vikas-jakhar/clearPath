import Link from 'next/link'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'

const Learning = () => {
    return (
        <div className='xl:pt-28 lg:pt-24 md:pt-16 pb-px relative z-10'>
            <div className="container">
                <div className="mx-auto bg-off-white max-w-[961px] w-full rounded-[22px] px-2 shadow-4xl py-8 sm:py-11">
                    <div className="mx-auto max-w-[621px] w-full flex flex-col items-center">
                        <PrimaryHeading className='text-center' text='Interested In learning More?' />
                        <PrimaryParagraph className='text-center text-deep-blue' data='Contact us today to explore how our dual service solution can help your treatment center achieve its growth objectives.' />
                        <div className="flex justify-center items-center flex-col sm:flex-row mt-5 sm:mt-7 md:mt-10 md:gap-14 sm:gap-12 gap-4 lg:gap-[62px]">
                            {[...Array(2)].map((_, idx) => (
                                <Link key={idx} href='/' className='border-[0.5px] transition_slow group hover:bg-deep-blue hover:shadow-4xl border-medium-gray rounded-xl p-2.5 flex gap-3'>
                                    <Image src={idx === 0 ? "/assets/images/svg/preston.svg" : "/assets/images/svg/kyle.svg"} className='w-12 h-12' alt='icon' width={48} height={48} priority />
                                    <div className="flex flex-col">
                                        <p className='font-lato text-black transition_slow group-hover:text-off-white font-normal text-base'>{idx === 0 ? "Preston Powell" : "Kyle Ingram"}</p>
                                        <PrimaryParagraph className='transition_slow group-hover:text-off-white' data={idx === 0 ? "preston@webserv.io" : "kyle@clearpath.com"} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learning