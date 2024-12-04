import './App.css'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import product1 from "./images/product-1.png"
import product2 from "./images/product-2.png"
import product3 from "./images/product-3.png"
import product4 from "./images/product-4.png"
import product5 from "./images/product-5.png"
import product6 from "./images/product-6.png"

function App() {
  return (
    <div className='bg-[#f9f6f2] h-[200vh] w-[100%]'>
      <div className='py-10 px-20'>
        <header className='bg-[#060413] rounded-full h-[60px] flex justify-between items-center'>
          <div className='mx-10'>
            <h2 className="logo text-[#f8e4be] text-xl">Dev's Cafe.</h2>
          </div>
          <div className='my-1 w-[600px]'>
            <input type="text" className='text-xl text-[#000] w-full rounded-full px-3 py-1 bg-[#f8e4be] border-none outline-none focus:ring-4 ring-[#54372a] transition-all duration-300 placeholder:text-md font-serif placeholder:text-[#77571c9a]' placeholder='Search Your Favourite Coffee' />
          </div>
          <div className='flex justify-between gap-3 items-center mx-8'>
            <CiUser className='text-[#f8e4be] hover:text-[#8a5a43] transition-all duration-300 cursor-pointer' size={25} />
            <CiShoppingCart className='text-[#f8e4be] hover:text-[#8a5a43] transition-all duration-300 cursor-pointer' size={25} />
          </div>
        </header>
      </div>
      <div className='py-2 px-20'>
        <div className='bg-[#e8d8cd] m-3 flex flex-wrap justify-around items-center py-10 rounded-lg'>
          <div className="cart1 w-[280px] bg-[#fff8f7] flex flex-col justify-center items-center rounded-[1.5rem] p-[20px]">
            <img src={product1} className='mt-[1.5rem] w-[140px] h-[140px] rounded-[50%] object-cover' />
            <p className='text-[0.7rem] font-serif py-[2px] px-[7px] border border-[#94908e] bg-[#fff] m-[1rem] rounded-[2rem]'>4 types available</p>
            <h2 className='text-[#54372a] text-[1.3rem] font-[500]'>instant coffee</h2>
            <div class="product-info flex items-center justify-between mt-[2rem] w-[100%]">
              <span className='text-[#54372a] font-[500]'>$14</span>
              <IoIosCart size={30} className='p-[8px] bg-[#df582e] text-[#f9f6f2] rounded-[50%] cursor-pointer hover:bg-[#54372a] transition-all duration-300' />
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default App

          // <div className="cart1 w-[280px] bg-[#fff8f7] flex flex-col justify-center items-center rounded-[1.5rem] p-[20px]">
          //   <img src={product1} className='mt-[1.5rem] w-[140px] h-[140px] rounded-[50%] object-cover' />
          //   <p className='text-[0.7rem] font-serif py-[2px] px-[7px] border border-[#94908e] bg-[#fff] m-[1rem] rounded-[2rem]'>4 types available</p>
          //   <h2 className='text-[#54372a] text-[1.3rem] font-[500]'>instant coffee</h2>
          //   <div class="product-info flex items-center justify-between mt-[2rem] w-[100%]">
          //     <span className='text-[#54372a] font-[500]'>$14</span>
          //     <IoIosCart size={30} className='p-[8px] bg-[#df582e] text-[#f9f6f2] rounded-[50%] cursor-pointer hover:bg-[#54372a] transition-all duration-300' />
          //   </div>
          // </div>
          // <div className="cart1 w-[280px] bg-[#fff8f7] flex flex-col justify-center items-center rounded-[1.5rem] p-[20px]">
          //   <img src={product1} className='mt-[1.5rem] w-[140px] h-[140px] rounded-[50%] object-cover' />
          //   <p className='text-[0.7rem] font-serif py-[2px] px-[7px] border border-[#94908e] bg-[#fff] m-[1rem] rounded-[2rem]'>4 types available</p>
          //   <h2 className='text-[#54372a] text-[1.3rem] font-[500]'>instant coffee</h2>
          //   <div class="product-info flex items-center justify-between mt-[2rem] w-[100%]">
          //     <span className='text-[#54372a] font-[500]'>$14</span>
          //     <IoIosCart size={30} className='p-[8px] bg-[#df582e] text-[#f9f6f2] rounded-[50%] cursor-pointer hover:bg-[#54372a] transition-all duration-300' />
          //   </div>
          // </div>