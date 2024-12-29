import { useSearchParams } from 'react-router-dom'
import {ShopContext} from '../context/ShopContext'
import { useContext, useEffect } from 'react'
import axios from 'axios'
const Verify = () => {

  const{ navigate, token , setCartItems}= useContext(ShopContext)
  const [seaarchParams, setSearchParams]= useSearchParams()

    const success = seaarchParams.get('success')
    const orderId = seaarchParams.get('orderId')


  const verifyPayment = async()=>{
    try {
      if(!token){
        return null
      }

      const response = await axios.post('http://localhost:4000/api/order/verifyStripe', {success,orderId},{headers:{token}})

      if(response.data.success){
        setCartItems({})
        navigate('/orders')
      }
      else{
        navigate('/cart')
      }
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  useEffect(()=>{
    verifyPayment()
  },[token])

  return (
    <div>
      
    </div>
  )
}

export default Verify
