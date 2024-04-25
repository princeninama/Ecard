import Image1 from '../../../public/sample1.jpg'
import Image2 from '../../../public/sample2.jpg'
import Image3 from '../../../public/sample3.png'
import Image4 from '../../../public/smaple4.png'
import '../../css/mainpage.css'



const Show = () =>{

    const Images = [[Image1,Image2,Image3,Image4,Image4],[Image1,Image2,Image3,Image4,Image4],[Image1,Image2,Image3,Image4,Image4],[Image1,Image2,Image3,Image4,Image4]]

    return(
        <div className='bg-gradient-to-br from-red-500 via-pink-300 to-rose-300 h-screen w-screen'>
            <div className='justify-center flex items-center'>
            <div  className='scrollbar h-screen overflow-y-scroll'>
            {Images.map((images)=>(
               
                    <div className='flex'>
                            {images.map(((image,idex) =>(
                                
                                <div>
                                   <img src={image} alt="" className='s shadow-md' style={{height:200,width:230,margin:'15px 30px',border:'3px solid #f2ca5c',borderRadius:10,cursor:'pointer'}}/>
                                </div>
                            )))}
                    </div>
                
            ))}
          
        </div>
            </div>
        </div>
    )
}

export default Show;