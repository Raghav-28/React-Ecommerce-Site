import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assests";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems , updateQuantity , navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Process cart items into an array format
    const tempData = Object.entries(cartItems).flatMap(([productId, sizes]) =>
      Object.entries(sizes)
        .filter(([size, quantity]) => quantity > 0) // Only include items with quantity > 0
        .map(([size, quantity]) => ({
          _id: productId,
          size,
          quantity,
        }))
    );

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          // Safeguard: Skip rendering if productData is missing
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt={productData.name}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
  onChange={(e) => {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value); // Handle empty values as 0
    if (newValue > 0) {
      updateQuantity(item._id, item.size, newValue); // Update valid quantities
    }
  }}
  type="number"
  defaultValue={item.quantity}
  className="border max-w-15 sm:w-20 px-1 sm:px-2 py-1"
/>
              <img
              onClick={()=> updateQuantity(item._id, item.size,0)}
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt="Delete"
              />
            </div>
          );
        })}
      </div>

        <div className="flex justify-end my-20">
          <div className="w-full sM:w-[450px]">
            <CartTotal/>
            <div className="w-full text-end">
            <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
            </div>
          </div>

        </div>

    </div>
  );
};

export default Cart;
