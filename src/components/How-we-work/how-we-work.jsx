import {Card, CardDescription, CardTitle} from '../ui/card';
import { MoveRight } from 'lucide-react';


export const How_we_work = ()=>{
    return (
        <>
            <div className='bg-Link-Water py-32 '>

                <div className=' container space-y-2 md:grid grid-cols-6 py-32 md:gap-8'>

                    <div className='col-span-2'>
                        <Card className="border-none p-4 md:border-none shadow-none bg-Link-Water rounded-none">
                            <h1 className='md:font-bold text-2xl mb-4'>How we work</h1>
                            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                            <a href="" className='flex items-center space-x-4 text-Blue'>
                                <span>Get in touch with us</span>
                                <MoveRight/>
                            </a>

                        </Card>
                    </div>

                    <div className='grid grid-cols-1 col-start-4 col-span-3 space-y-2 md:grid-cols-2 gap-4'>
                                    
                        <Card className="border-none p-4 space-y-4 md:border-none shadow-none  bg-Link-Water lg:p-0">
                            <CardTitle >Wireframing</CardTitle>
                            <CardDescription className ="max-w-[300px]">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CardDescription>
                        </Card>                 
                                    
                        <Card className="border-none p-4 space-y-4 md:border-none shadow-none  bg-Link-Water lg:p-0">
                            <CardTitle >Wireframing</CardTitle>
                            <CardDescription className ="max-w-[300px]">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CardDescription>
                        </Card>                 
                                    
                        <Card className=" border-none p-4 space-y-4 md:border-none shadow-none  bg-Link-Water lg:p-0">
                            <CardTitle >Wireframing</CardTitle>
                            <CardDescription className ="max-w-[300px]">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CardDescription>
                        </Card>                 
                                    
                        <Card className="border-none p-4 space-y-4 md:border-none shadow-none  bg-Link-Water lg:p-0">
                            <CardTitle >Wireframing</CardTitle>
                            <CardDescription className ="max-w-[300px]">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</CardDescription>
                        </Card>                 
                    
                                      
                    
                    </div>
                </div>
            </div>
        </>
    )
}