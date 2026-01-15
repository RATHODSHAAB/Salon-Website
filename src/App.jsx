
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashborad } from './Pages/Dashborad'
import { MemberList } from './Pages/MemberList'
import { Gallery } from './Pages/Gallery'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashborad></Dashborad>}></Route>
          <Route path='/mum' element={<MemberList></MemberList>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        </Routes>
         
      </BrowserRouter>
    </>
  )
}

export default App
