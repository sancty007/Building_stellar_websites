
import {Logo_Finsweet} from './logo.jsx'
import {Logo_Home} from './logo.jsx'
import {Button} from '../ui/button.jsx'
import { MoveRight } from 'lucide-react';
import { AlignRight } from 'lucide-react';
import {Card, CardDescription, CardFooter, CardTitle} from '../ui/card.jsx';


export const Header = () =>{

    return (
        <>
            <div className=' hidden lg:flex justify-between items-center bg-port-core px-40 py-4 '>                
                <div>
                    <Logo_Finsweet/>
                </div>

                <div className='flex  items-center tex-gray-Suit justify-center gap-12'>
                    <div >
                        <ul className='flex gap-8 text-xs '> 
                            <li className='text-white  hover:text-white'>Home</li>
                            <li className="text-gray-suit hover:text-white">About us</li>
                            <li className="text-gray-suit hover:text-white">Features</li>
                            <li className="text-gray-suit hover:text-white">Pricing</li>
                            <li className="text-gray-suit hover:text-white">FAQ</li>
                            <li className="text-gray-suit hover:text-white">Blog</li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button_header style="px-12 py-4  text-xs bg-port-core text-white border-2 border-gray-100 rounded-3xl  hover:bg-transparent bg-opacity-0"/>
                    </div>
                    
                   
                </div>
          </div>
        </> 
    )
}

// Boutton header 
export const Button_header = ({style}) => {
    return (
        <>
            <Button className={style}>Contact us</Button>
        </>
    )
}

export const Home = () => {
    return (
        <>
            <Header/>

           

           {/*  <div className='lg:flex bg-port-core justify-center py-36 lg:px-40 '> */}
            
            {/* <div className='lg:flex justify-center bg-port-core py-20 lg:py-36 px-4 md:px-8 lg:px-40'>

*/}    
        <div className=" bg-port-core md:hidden flex justify-end px-8 py-4">
                <AlignRight className="text-gray-suit text-3xl" />
        </div>

        <section className='bg-port-core md:py-32'>
            <div className='container lg:grid grid-cols-1 md:grid-cols-2'>
                <Card className =" rounded-none bg-port-core border-none space-y-8 ">
                    <CardTitle className =" text-white md:mb-8 md:text-5xl">Building stellar websites for early startups</CardTitle>
                    <CardDescription className ="md:mb-12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</CardDescription>
                    <CardFooter className ="flex p-0 gap-x-10">
                        <Button className='bg-Salomie rounded-full px-12 py-4'>View our work</Button>
                        <a href="" className='flex items-center md:space-x-4 text-white'>
                          <span className=''>View More</span>
                          <MoveRight/>
                        </a>
                    </CardFooter>
                </Card>

                <div className='flex justify-center'>
                    <Logo_Home/>  
                </div>
            </div>
        </section>
            
          
        </>
    )
}





/* export const Home = () => {
    return (
        <>
            <Header />
            <div className='lg:flex bg-port-core justify-center py-16 px-4 lg:px-0'>
                {/* Utilisation de grid pour mieux organiser le contenu sur les grandes résolutions }
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-6xl'>


                    <div className='w-full flex flex-col justify-center md:mb-0 md:order-2'>
                        <div className='mb-12'>
                            <h1 className='sm:text-5xl text-orange-500 md:text-5xl lg:text-white font-bold mb-6 text-center md:text-left'>Building stellar websites for early startups</h1>
                            <p className='text-gray-suit text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        
                        <div className='flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10'>
                            <Button className='bg-Salomie w-full md:w-auto'>View our work</Button>

                            <div className='flex items-center text-white'>
                                <p className='mr-4'>View Pricing</p>
                                <div className='text-center'>
                                    <MoveRight />
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className='w-full flex justify-center md:order-1'>
                        <Logo_Home />
                    </div>
                </div>
            </div>
        </>
    );
}; */
