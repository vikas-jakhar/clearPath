import Image from 'next/image'
import Link from 'next/link'
import Icon from '../common/Icons'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-deep-blue pt-24 -mt-[147px] pb-6'>
      <div className="container pt-24 sm:mt-20">
        <div className="flex lg:flex-row pb-0.5 flex-col justify-between">
          <div className="max-w-[364px] w-full">
            <Link href='' className='w-fit flex'>
              <Image src="/assets/images/svg/clear-logo.svg" className='w-full max-w-[138px]' alt='icon' width={138} height={40} priority />
            </Link>
            <p className='text-white opacity-80 font-normal font-lato mt-5 pt-0.5'>Lorem ipsum dolor sit amet consectetur. Commodo facilisi augue pellentesque id vitae faucibus. Odio blandit non mi donec non ipsum sed volutpat. </p>
            <div className="mt-[22px] flex items-center gap-[22px]">
              {[...Array(4)].map((_, idx) => (
                <Link key={idx} href='' className='group bg-off-white hover:bg-deep-blue transition_slow w-6 h-6 grid place-items-center rounded-full shadow-5xl'>
                  <Icon iconName={idx === 0 ? "facebookIcon" : idx === 1 ? "twitterIcon" : idx === 2 ? "linkedin" : "instagramIcon"} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col sm:flex-row justify-between lg:w-fit sm:mt-14 mt-8 lg:mt-0 gap-8 sm:gap-24">
            <div className="max-w-[107px] w-full">
              <h2 className='font-messiri font-semibold text-white text-2xl'>Services</h2>
              <div className="flex flex-col sm:pt-2.5">
                {[...Array(5)].map((_, index) => (
                  <Link key={index} href='/' className='font-normal w-fit text-white capitalize opacity-80 font-lato text-base mt-2.5'>{index === 0 ? "Home" : index === 1 ? "Why Webserv?" : index === 2 ? "Services" : index === 3 ? "Testimonial" : "Process"}</Link>
                ))}
              </div>
            </div>
            <div className="lg:max-w-[225px] w-fit lg:w-full">
              <h2 className='font-messiri font-semibold text-white text-2xl'>Contact Info</h2>
              <div className="flex flex-col sm:pt-2.5">
                {[...Array(3)].map((_, idx) => (
                  <Link key={idx} target={idx === 0 ? "_blank" : undefined} href={idx === 0 ? "https://maps.app.goo.gl/7y57DaZwv2WLeZQBA" : idx === 1 ? "callto:+1234567890" : "mailto:Support@gmail.com"} className='flex w-fit items-center gap-4 mt-2.5'>
                    <Icon iconName={idx === 0 ? "locationIcon" : idx === 1 ? "phoneIcon" : "emailIcon"} />
                    <span className='font-normal text-white capitalize opacity-80 font-lato text-base'> {idx === 0 ? "78 SW 7th Street Miami, FL 33130, USA" : idx === 1 ? "+123 456 7890" : "Support@Clear Path Treatment Solutions.com"}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className='mt-11 flex w-full h-0.5 bg-white opacity-20'></span>
        <span className='font-lato opacity-80 text-white font-normal text-base text-center mt-6 w-fit mx-auto flex'>Copyright {currentYear}. All Rights Received by Us.</span>
      </div>
    </div>
  )
}

export default Footer