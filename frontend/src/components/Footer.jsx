import { assets } from "../assets/assests"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className="mb-5 w-32" alt="" />
            <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi magnam voluptates aliquid eveniet maiores minima at iure et. Odit, quas officiis deleniti amet blanditiis dolorem velit vero ipsa, laudantium soluta temporibus!
            </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>


           <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 9045091370</li>
                <li>kraghvgupta@gmail.com</li>
            </ul>
            </div> 
      </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024 RudrakshGems.com . ALL Rights Reserved </p>
        </div>

    </div>
  )
}

export default Footer
