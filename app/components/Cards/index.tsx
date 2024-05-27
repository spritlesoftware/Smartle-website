import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";

interface datatype {
    heading: number;
    imgSrc: string;
    paragraph: string;
    link: string;
    bg:string
}

const Aboutdata: datatype[] = [
    {
        heading: 83,
        imgSrc: "/images/aboutus/service.svg",
        paragraph: 'Increased in customer satisfaction ratings',
        link: 'Learn more',
        bg:"#AFD5F0"
    },
    {
        heading: 67,
        imgSrc: "/images/aboutus/package.svg",
        paragraph: 'Increase in Average order value',
        link: 'Learn more',
        bg:"#F8C8DC"
    },
    {
        heading: 79,
        imgSrc: "/images/aboutus/support.svg",
        paragraph: 'Reduction in customer support tickets',
        link: 'Learn more',
        bg:"#FEDD9E"
    },
]

const Cards = () => {
    return (

        <div>
            <div className='mx-auto max-w-7xl px-4 py-24 my-10 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-lg tracking-widest text-blue'>SMARTLE.AI</h3>
                <h4 className='text-center text-5xl lg:text-70xl font-bold'>Smartle’s Tangible Outcomes</h4>
                <p className="text-center text-xl mt-4">The concrete results our customers have attained</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-12 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group card' style={{backgroundColor:item.bg}}>
                            <h4 className='text-4xl font-semibold mb-5 number-text group-hover:text-black'>
                            <NumberTicker value={item.heading} />%
                            </h4>
                            
                            <Image src={item.imgSrc} alt={item.imgSrc} width={40} height={40} className="mb-5" />
                            <h4 className='text-lg font-normal text-black mb-5'>{item.paragraph}</h4>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Cards;