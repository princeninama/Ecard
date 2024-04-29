
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

function App() {

  return (
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Index />} />
      <Route path="/main" element={<Mainpage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/More" element={<Post />} />
      <Route path="/show" element={<Show />} />
      <Route path="/wedding/model1" element={<Model1 />} />
      <Route path="/wedding/model2" element={<Model2 />} />
      <Route path="/signUp" element={<Login />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
