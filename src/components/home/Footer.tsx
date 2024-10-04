import Image from 'next/image'
import Link from 'next/link'
import Icon from '../common/Icons'

const Footer = () => {
  return (
    <div className='bg-deep-blue pt-24 -mt-[147px] pb-6'>
      <div className="container pt-24 mt-20">
        <div className="">
          <div className="max-w-[364px] w-full">
            <Link href='' className='w-fit flex'>
              <Image src="/assets/images/svg/clear-logo.svg" className='w-full max-w-[138px]' alt='icon' width={138} height={40} priority />
            </Link>
            <p className='text-white opacity-80 font-normal font-lato mt-5 pt-0.5'>Lorem ipsum dolor sit amet consectetur. Commodo facilisi augue pellentesque id vitae faucibus. Odio blandit non mi donec non ipsum sed volutpat. </p>
            <div className="mt-[22px] flex items-center gap-[22px]">
              {[...Array(4)].map((_, idx) => (
                <Link href='' className='group bg-off-white hover:bg-deep-blue transition_slow w-6 h-6 grid place-items-center rounded-full shadow-5xl'>
                  <Icon iconName={idx === 0 ? "facebookIcon" : idx === 1 ? "twitterIcon" : idx === 2 ? "linkedin" : "instagramIcon"} />
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h2>Services</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer