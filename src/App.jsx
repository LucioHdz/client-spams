import React from "react"
import { useState } from "react"
import Nav from "./components/Nav"
import MainPage from './pages/MainPage'
import Test from './pages/Test'
function App() {
  const [page,setPage] = useState(0)
  return (
    <div className="container- ">
      <Nav setPage={setPage} page={page}/>
      {page===0?<MainPage/>:<Test/>}
    </div>
  )
}

export default App
