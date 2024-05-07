import {Card} from '../ui/card';
import { MoveRight } from 'lucide-react';


export const How_we_work = ()=>{
    return (
        <>
            <div className='bg-Link-Water'>
                <div className='md:flex py-32 gap-36 px-40 lg:flex '>
                    <div className='w-full md:w-1/3 '>
                        <Card className="md:border-none shadow-none bg-Link-Water rounded-none">
                            <h1 className='md:font-bold text-2xl mb-4'>How we work</h1>
                            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className='md:flex items-center lg:flex flex-row text-Blue'>
                                <div className='mr-4 '>Get in touch with us</div>
                                <div className='text-center '>
                                    <MoveRight/>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className='w-full  md:w-1/2 lg:w-2/3 flex'>
                        <div className='w-1/2'>
                            <Card className="md:border-none shadow-none rounded-none bg-Link-Water">
                                <h2 className='text-xl font-semibold mb-2'>Wireframing</h2>
                                <p className='text-gray-600'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </Card>
                        </div>
                        <div className='w-1/2'>
                            <Card className="md:border-none shadow-none rounded-none bg-Link-Water">
                                <h1 className='text-xl font-semibold mb-2'>Strategy</h1>
                                <p className='text-gray-600 '>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}