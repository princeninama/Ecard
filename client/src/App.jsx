
import Login from './screens/login'
import Model1 from './Models/F1/model1'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Show from './components/Mainpage/More'
import Signin from './components/login/signin'
import Model2 from './Models/F2/Model2'
import Post from './components/Admin/Post'
import Forget from './components/Forget'
import Index from './screens/Index'
// import Model from './screens/model';
import Middle1 from './Models/F3/middle1';
import Model3 from './Models/F3/mainpage';
import Album from './Models/F3/Album';
import Map from './Models/F3/map';
import { Model3router } from './AppRouting';
import Model from './screens/model';
import Form3 from './Models/F3/form';
import Form1 from './Models/F1/form';
import Form2 from './Models/F2/form';

function App() {

  return (
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Index />} />
      <Route path="/main" element={<Mainpage />} />
      
      
      <Route path="/Create" element={<Create />} />
      <Route path="/More" element={<Post />} />
      <Route path="/show" element={<Show />} >
        <Route path='model3' element={<Model3/>} />
        <Route path='model1' element={<Model1/>} />
        <Route path='model2' element={<Model2/>} />
      </Route>
      <Route path="/signUp" element={<Login />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/signin" element={<Signin />} /> 
      <Route path="/main/model1" element={<Form1 />} />
      <Route path="/main/model2" element={<Form2 />} />
      <Route path='/main/model3' element={<Form3/>} >
            {/* <Route path='map' element={<Map/>} />
            <Route path='album' element={<Album/>} />
            <Route path='' element={<Middle1/>} /> */}
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