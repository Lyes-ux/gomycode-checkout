import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'


function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route index Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>

     </Routes>

    </BrowserRouter>
  )
}

export default App
