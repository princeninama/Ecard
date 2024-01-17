import Image1 from '../../../public/sample1.jpg'
import Image2 from '../../../public/sample2.jpg'
import Image3 from '../../../public/sample3.png'
import Image4 from '../../../public/smaple4.png'




const Container = () =>{


    const Images = [[Image1,Image2,Image3,Image4],[Image1,Image2,Image3,Image4],[Image1,Image2,Image3,Image4],[Image1,Image2,Image3,Image4,]]

    return(
        <div style={{height:400,overflow:'scroll'}}>
            {Images.map((images)=>(
               
                    <div className='flex'>
                            {images.map(((image,idex) =>(
                                
                                <div>
                                   <img src={image} alt="" style={{height:180,width:300,margin:'15px 30px',border:'3px solid #f2ca5c',borderRadius:10,cursor:'pointer'}}/>
                                </div>
                            )))}
                    </div>
                
            ))}
        </div>
    )
}

export default Container;