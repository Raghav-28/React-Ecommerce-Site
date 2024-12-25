import { assets } from "../assets/assests";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
const About = () => {
  return (
    <div>
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'}/>

</div>

<div className="my-10 flex flex-col md:flex-row gap-16">
  <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
  <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro perferendis molestias quasi dolorem nesciunt cum non optio, eum deleniti sit amet doloremque. Veritatis molestias labore repudiandae minus non voluptatem omnis voluptatum quam. Voluptatibus eum doloremque, magnam dolorum qui et beatae voluptatem quasi consequuntur.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nobis a sapiente eveniet neque earum totam atque dolore, quia sunt dolorum placeat maxime officia natus doloremque cum quas ducimus quidem blanditiis, eaque dolores quod aspernatur iste officiis! Omnis, consequatur autem vel eius corporis iusto.</p>
  <b className="text-gray=800">Our Mission</b>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quaerat necessitatibus cupiditate et laborum fugiat nulla consectetur in unde voluptatum error ducimus explicabo, repellendus doloremque corrupti harum inventore quibusdam eos dolore cum quidem.</p>
  
    </div>
  </div>
   <div className="text-4xl py-4">
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
   </div>
   <div className="flex flex-col md:flex-row text-sm mb-20">
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b>Quality Assurance:</b>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi accusamus obcaecati beatae recusandae neque, exercitationem molestiae veniam a itaque voluptatum sit.</p>

    </div>
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b>Convenience:</b>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi accusamus obcaecati beatae recusandae neque, exercitationem molestiae veniam a itaque voluptatum sit.</p>

    </div>
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b>Customer Service:</b>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi accusamus obcaecati beatae recusandae neque, exercitationem molestiae veniam a itaque voluptatum sit.</p>

    </div>
   </div>

   <NewsLetterBox/>

    </div>
  )
}

export default About
