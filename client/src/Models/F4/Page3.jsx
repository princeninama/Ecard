
import './style.css'

const Page3 = ({ data }) => {

    return (
        <div className="h-screen w-screen bg-gradient-to-r from-fuchsia-200 via-pink-100 via-white  via-rose-100 to-rose-50 flex justify-center items-center">


            <div className="w-[70%] mt-20 h-screen overflow-y-scroll scrollbar">
               
                    <div>
                        {data.events.map((event)=>(
                            <>
                             <div className="h-64 w-[100%] rounded-md shadow-md border-2 border-neutral-600 my-36">
                            <div className="flex justify-between items-center px-8 py-5">
                                <div className="text-lg font-semibold">{event.name}</div>
                                <div className="text-gray-600">{event.date}</div>
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