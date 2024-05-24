import { MoveRight } from 'lucide-react';
import Card from '/images/Card.png';
//import image1 from '/images/image1.png';
//import { useMediaQuery } from 'react-responsive';
//import { CardImage } from './images.jsx';

export const Projet =() =>{
    return (
           <section className='py-32'>
              <div className='container space-y-16'>
                 <div className='flex justify-between items-center'>
                      <h2 className='text-Charade text-2xl'>View our projects</h2>
                      <a href="" className='flex items-center space-x-4'>
                          <span>View More</span>
                        <MoveRight/>
                      </a>
                 </div>

                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6'>
                  
                   <div className='lg:col-span-2 bg-slate-400 row-span-2 relative group'>
                    <img src={Card} alt="" />
                    <div className=' text-white flex items-end w-1/2 px-9 pb-8  absolute bg-gradient-to-r bg-transparent from-Blue to-blue-400/40 inset-y-0 invisible group-hover:visible'>
                      <div className='space-y-3'>
                        <h1 className=' font-semibold'>Workhub office Webflow Webflow Design</h1>
                        <p className=' text-white/80'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href="" className='flex items-center space-x-4 text-yellow-400'>
                            <span>View More</span>
                          <MoveRight/>
                        </a>
                      </div>
                    </div>
                   </div>
                   <div className='bg-blue-400 '>b</div>
                   <div className='bg-red-400'>c</div>
                 </div>

              </div>
           </section>

    )
}

/* export const JustifyImage =  ({image}) =>{

    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    return (
      <div>
        {isMobile ? (
          <img src={image} alt="Image" style={{ width: '100%', height: 'auto' }} />
        ) : (
          <img src={image} alt="Image" style={{ width: 'auto', height: 'auto' }} />
        )}
      </div>
    );
  } */