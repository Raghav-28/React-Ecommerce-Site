import { Link } from "react-router-dom"
import { assets } from "../assets/assests"
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">Flat-12 D-144/E Harinagar Ashram <br /> New Delhi</p>
          <p className=" text-gray-500">Tel: 9045091370 <br /> Email : kraghavgupta@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers At Forvere</p>
          <p className=" text-gray-500">Learn More About Us from Youtube</p>
          <Link to='/about'><button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Know More</button>
          </Link>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
