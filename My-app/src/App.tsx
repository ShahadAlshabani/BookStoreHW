
import './App.css'
import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
function App() {

  return (
    <>
     <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "book" >
        <Route path = ":id" element={<Book/>}/>
        </Route>

   </Routes>
    </>

  )
}

export default App
