
import './style.css'
import '../../../src/assets/fonts/fonts.css'
const Page3 = ({ data }) => {

    const golden= "text-transparent bg-clip-text bg-gradient-to-r from-amber-200  to-yellow-200"


    return (
        <div className="h-screen w-screen  bg-gradient-to-tr from-red-800 to-red-950 flex justify-center items-center">


            <div className="w-[70%] mt-20 h-screen overflow-y-scroll scrollbar">
               
                    <div>
                        {data.events.map((event)=>(
                            <>
                             <div className="h-72 w-[100%] rounded-md shadow-md border-2 border-yellow-400 my-36">
                            <div className='text-gradient1 text-3xl font-extrabold font-serif my-2'>
                                {event.date}
                            </div>
                            <div className='text-gradient2 tracking-widest text-3xl font-bold font-serif my-4'>
                                {event.name}
                            </div>
                            <div className='text-gradient1 tracking-widest text-xl font-boldf font-serif my-4 justify-center flex items-center h-[50%] '>
                               <div className='w-[90%]'>
                               {event.description}
                               

                               
                               </div>
                            </div>
                            </div>
                            </>
                        ))}
                    </div>

               
            </div>


        </div>
    )
}

export default Page3;