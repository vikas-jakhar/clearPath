import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Icon from '../common/Icons'
import { PERFORMANCE_DATA } from '@/utils/Helper'

const Performance = () => {
    return (
        <div className='md:py-8 sm:py-4 py-1'>
            <div className="container my-0.5">
                <span className='flex mx-auto text-deep-blue font-messiri font-normal text-sm w-fit py-2 px-3.5 border border-off-blue bg-light-sky rounded-lg text-center'>Performance Marketing Agency</span>
                <PrimaryHeading className='mt-2.5 text-center text-deep-blue' text='Why Webserv?' />
                <PrimaryParagraph className='md:mt-4 mt-2 text-center mx-auto max-w-[800px]' data='We use a data driven approach to deliver qualified leads at a fraction of the price of the competition. Our approach relies on first and third party data to target the right people at the right time.' />
                <div data-aos='zoom-in' className="lg:mt-10 sm:pt-2 lg:pt-0 flex flex-wrap justify-center flex-row -mx-3">
                    {PERFORMANCE_DATA.map((items, idx) => (
                        <div data-aos='zoom-in' key={idx} className="lg:w-4/12 sm:w-1/2 w-full mt-6 lg:mt-0 px-3">
                            <div className="shadow-3xl flex flex-col items-center sm:items-start border-[0.5px] border-off-gray bg-off-white transition_slow group hover:bg-deep-blue hover:border-deep-blue h-full w-full rounded-xl p-3 md:p-5">
                                <Icon className='rounded-full w-[60px] h-[60px] place-items-center bg-dark-blue' iconName={items.icon} />
                                <h2 className={`font-semibold font-messiri text-center sm:text-left transition_slow group-hover:text-off-white mt-7 text-lg sm:text-xl md:text-2xl text-deep-blue ${idx === 1 ? "xl:pr-5" : ""}`}>{items.title}</h2>
                                <PrimaryParagraph className='lg:mt-4 mt-2 text-center sm:text-left text-deep-blue transition_slow group-hover:text-off-white' data={items.text} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Performance