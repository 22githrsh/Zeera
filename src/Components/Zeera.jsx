import { RiArchive2Fill, RiArchive2Line, RiArrowDownCircleFill, RiArrowDownCircleLine, RiArrowDownDoubleFill } from '@remixicon/react'
import React from 'react'

const Zeera = () => {
  return (
    <>
      <div className='w-full overflow-hidden relative'>
        <div className='page1 min-h-[100vh] w-full bg-black'>
          <div className='up h-[60vh] w-full border border-transparent md:leading-[9rem] leading-[5rem]'>
            <h1 className='md:text-[140px] md:font-[600] text-[80px] font-[600] p-1 ml-10 md:ml-[100px] mt-[200px] text-[#3B2FEA] font-[Helvetica] '>HEY <br /> <span className='text-white font-mono' >SHERYIANS</span>  </h1>
          </div>
          <div className='h-[70vh] md:h-[100vh] w-[80%] ml-[10%] bg-slate-500 mt-[150px]'>
            <img className='h-full w-full object-cover object-center' src="https://ik.imagekit.io/sheryians/About%20Us/image%2031_6PfpqHFrv.png?updatedAt=1710496331726" alt="" />
          </div>
        </div>
        <div className='page2 min-h-[100vh] w-full bg-black border border-transparent'>
          <h1 className='text-white text-[100px] mt-[100px] ml-[80px] font-[Helvetica] w-fit outline-white'>TASKS</h1>
          <div className='flex items-center justify-between pr-10 '>
          <img className='h-[0vh] md:h-[100vh] md:ml-10 md:mt-[150px] md:w-[40%] md:object-cover md:object-center' src="https://ik.imagekit.io/sheryians/About%20Us/3d%20banners%20for%20Tinkoff%20Bank%20_%20Pack%20No_%202%201_31UnftF4sc.png?updatedAt=1710496328999" alt="" />
           <div className='h-[40vh] w-[40vh] mt-[150px] rounded-full border flex items-center justify-center  md:h-[40vh] md:w-[40vh] md:rounded-full md:border md:flex md:items-center md:justify-center'>
            <RiArrowDownDoubleFill className='text-white bg-transparent scale-[4]' />
           </div>
          </div>
        </div>
        <div className='page3 h-[100vh] w-full bg-black flex items-center justify-center text-white text-[50px] text-center'>
          <h1 className='md:w-[60%] md:font-[Helvetica] text-[30px] w-[90%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Voluptate dignissimos natus cum
            voluptas, eum dolorum in nostrum nemo voluptates impedit eos esse dicta architecto minus adipisci? Mollitia possimus saepe
            similique?</h1>
        </div>
        <div className='min-h-[100vh] w-full bg-black flex justify-between p-[100px]'>
          <div>
         <img className='h-[60vh] w-[100%] object-cover' src="https://images.unsplash.com/photo-1713551456730-ba311f8c940c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1 className='text-white md:text-[50px] text-[30px] w-[100%] '>Tasks ongoing</h1>
          </div>
          <div>
         <img className='md:h-[80vh] h-[0vh] md:object-cover mt-64' src="https://images.unsplash.com/photo-1713429504255-4e6fe73fc7a1?q=80&w=1579&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <h1 className='text-white md:text-[50px] text-[0px]'>Tasks completed</h1>

          </div>
        </div>

       <div className='h-[50vh] w-full bg-[#3930e5]'></div>
      </div>



    </>
  )
}

export default Zeera