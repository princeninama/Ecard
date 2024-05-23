
import './style.css'

const Page3 = ({ data }) => {

    return (
        <div className="h-screen w-screen bg-gradient-to-r from-fuchsia-200 via-pink-100 via-white  via-rose-100 to-rose-50 flex justify-center items-center">


            <div className="w-[70%] mt-20 h-screen overflow-y-scroll scrollbar">
                <div className="h-64 w-[100%] rounded-md shadow-md border-2 border-neutral-600 my-36">
                    <div>
                        {data.event[0][0]}
                    </div>
                </div>
               
            </div>


        </div>
    )
}

export default Page3;