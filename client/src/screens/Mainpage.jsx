import Navbar from '../components/Mainpage/navbar';
import Middlebox from '../components/Mainpage/middlebox';
import Container from '../components/Mainpage/bottom';
import { useState,useEffect } from 'react'
import { loadtemplates } from '../states/action-creators';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const Mainpage = () => {

  const [card, setCard] = useState([]);
    // const [array,setarray] =useState([]);
    const title = useSelector((state)=>state.user.title)
    const navigator = useNavigate()


    const getCard = async() =>{
        const resp = await loadtemplates(1,12,3,4);
        console.log(resp.data)
        setCard(resp.data)
      
    }
   
    useEffect(()=>{
    
        getCard();
    },[])

 return(
  <div>
 
       <div>
     <Navbar />
   </div>
   <div>
     <Middlebox/>
   </div>
   <div>
     <Container card={card}/>
   </div> 
   
  </div>
 )
};

export default Mainpage;
