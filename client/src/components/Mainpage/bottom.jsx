import { useDispatch} from 'react-redux'
import '../../css/mainpage.css'
import { useNavigate } from 'react-router-dom'
import { changeTemplates } from '../../states/action-creators'
import { useState } from 'react'




const Container = ({ card }) => {


    const [showform,setShowform]=useState(false)
    const handleshowform=()=>
    {
        setShowform(true);
        console.log("Form will be visible now")
    }
    const navigtor = useNavigate();
    const dispatch = useDispatch();

    const handdlechangetitle = (title) => {
        dispatch(changeTemplates(title))
       
    }
    const handleOpenNewTab = (path) => {
        localStorage.setItem('mode','a')
        window.open(path, '_blank');
    };
    const GotoMore = () => {
        navigtor('/show')
    }
  
    // const Images = [[Image1,Image2,Image3,Image4],[Image1,Image2,Image3,Image4],[Image1,Image2,Image3,Image4],[Image1,Image2,Image3,Image4,]]

    return (
        <div >
            {card.map((images) => (

                <div className='flex'>
                    {images.map(((image, idex) => (

                        <div style={{ margin: '15px 30px', cursor: 'pointer' }} className=' h-[320px] '>
                            <img src={image.imageURL} alt="" style={{ height: 300, width: 300, border: '3px solid #f2ca5c', borderRadius: 10 }} className='image'  onClick={()=>{handleOpenNewTab(`/main/${image.title}`)}}/>
                            <div className=' justify-center items-center flex'>{image.title}</div>
                        </div>
                    )))}
                </div>

            ))}
            <div className='justify-center flex items-center'>
                <div onClick={GotoMore} className='text-center justify-center flex items-center my-10 text-lg text-slate-50 font-semibold cursor-pointer border-2 rounded-full shadow-md w-48 h-10 bg-slate-950'>
                    &#60;&#60; Show More  &#62;&#62;
                </div>
            </div>
        </div>
    )
}

export default Container;