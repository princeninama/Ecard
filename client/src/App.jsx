
import Login from './screens/login'
// import Model1 from './Models/F1/model1'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Show from './components/Mainpage/More'
import Signin from './components/login/signin'
// import Model2 from './Models/F2/Model2'
import Post from './components/Admin/Post'
import Forget from './components/Forget'
import Index from './screens/Index'
// import Model from './screens/model';
import Middle1 from './Models/F3/middle1';
// import Model3 from './Models/F3/mainpage';
import Album from './Models/F3/Album';
import Map from './Models/F3/map';
import { Model3router } from './AppRouting';
import Model from './screens/model';
import Form3 from './components/Form/form';
import Card from './screens/Display_userCard';
import { Model1,Model2,Model3 } from './exports/exportsModule';
import Preview from './screens/preview';
import GeneralWedding from './components/Form/GeneralWedding';
import Model3form from './components/Form/Model3form';
import Model4 from './Models/F4/mainpage';
import { useAuthContext } from './context/useAuthcontext';

function App() {
  const {authUser}=useAuthContext();
  console.log(authUser);
  return (
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={ authUser? <Navigate to={"/main"}/>:<Index />} />
      <Route path="/main" element={authUser?  <Mainpage />:<Navigate to={"/signin"}/>} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/general" element={<GeneralWedding />} />
      <Route path='/preview/model1' element={<Preview/>} />
      <Route path='/preview/model2' element={<Preview/>} />
      <Route path='/preview/model4' element={<Preview/>} />
      <Route path='/preview/model3' element={<Preview/>} >
      {Model3router.map((route,index)=>(
              <Route key={index} path={route.path} element={route.component} />
            ))}
        </Route>

      <Route path="/Create" element={<Create />} />
      <Route path="/More" element={<Post />} />
      <Route path="/show" element={<Show />} >
        <Route path='model3' element={<Model3/>} />
        <Route path='model1' element={<Model1/>} />
        <Route path='model2' element={<Model2/>} />
        <Route path='model4' element={<Model4/>} />
      </Route>
      <Route path="/signUp" element={authUser? <Navigate to={"/main"}/>:<Login />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/signin" element={authUser? <Navigate to={"/main"}/>:<Signin />} /> 
      <Route path="/main/model1" element={<Form3 Model={Model1} Modelname={'model1'} Formname={GeneralWedding}/>} />
      <Route path="/main/model2" element={<Form3 Model={Model2} Modelname={'model2'} Formname={GeneralWedding}/>} />
      <Route path="/main/model4" element={<Form3 Model={Model4} Modelname={'model4'} Formname={Model3form}/>} />
      <Route path='/main/model3' element={<Form3 Model={Model3} Modelname={'model3'} Formname={Model3form}/>} >
            {/* <Route path='map' element={<Map/>} />
            <Route path='album' element={<Album/>} />
            <Route path='' element={<Middle1/>} /> */}
            {Model3router.map((route,index)=>(
              <Route key={index} path={route.path} element={route.component} />
            ))}  
      </Route> 
      <Route path='/user/:id/Model1' element={<Card Model={Model1}/>} />
      <Route path='/user/:id/Model2' element={<Card Model={Model2}/>} />
      <Route path='/user/:id/Model3' element={<Card Model={Model3}/>} >
      {Model3router.map((route,index)=>(
              <Route key={index} path={route.path} element={route.component} />
            ))} 
      </Route>



    </Routes>
  </BrowserRouter>
  )
}

export default App



// const Changes = () =>{


//   return (
//     <Routes>
//        <Route path='/x' element={<Album/>} />
//     </Routes>
//   )
// }