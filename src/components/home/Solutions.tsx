import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Icon from '../common/Icons'
import { SOLUTION_DATA } from '@/utils/Helper'

const Solutions = () => {
    return (
        <div className='md:py-8 sm:py-4 py-1'>
            <div className="container my-0.5">
                <PrimaryHeading className='mt-2.5 text-center text-deep-blue' text='ClearPath Treatment Solutions' />
                <PrimaryParagraph className='md:mt-5 mt-2 text-center mx-auto' data='Elevated performance call center focussing on quality of service and transparency.' />
                <div data-aos='zoom-in' className="lg:mt-10 sm:pt-2 flex flex-wrap justify-center flex-row -mx-3">
                    {SOLUTION_DATA.map((items, idx) => (
                        <div data-aos='zoom-in' key={idx} className="lg:w-4/12 sm:w-1/2 w-full mt-6 lg:mt-0 px-3">
                            <div data-aos='zoom-in' className="shadow-4xl flex flex-col items-center bg-off-white transition_slow group hover:bg-deep-blue h-full w-full rounded-xl px-8 pb-[26px]">
                                <Icon className='rounded-md w-[99px] h-24 place-items-center -mt-2 bg-deep-blue transition_slow group-hover:bg-off-white' iconName={items.icon} />
                                <h2 data-aos='zoom-in' className={`font-semibold font-messiri text-center transition_slow group-hover:text-off-white mt-7 text-lg sm:text-xl md:text-2xl text-deep-blue ${idx === 1 ? "xl:pr-5" : ""}`}>{items.title}</h2>
                                <PrimaryParagraph className='lg:mt-4 mt-2 text-center text-deep-blue transition_slow group-hover:text-off-white' data={items.text} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solutions