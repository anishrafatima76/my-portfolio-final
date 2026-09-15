import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import TodoApp from "./pages/TodoApp"
import WeatherApp from "./pages/WeatherApp"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default function App()
{
  return(
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/todo-app' element={<TodoApp/>} />
      <Route path='/weather-app' element={<WeatherApp/>} />
     </Routes>
     <Footer/>
    </div>
  )
}