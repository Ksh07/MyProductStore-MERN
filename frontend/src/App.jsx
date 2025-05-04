import { Button, Box } from '@chakra-ui/react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'

//npm install react-router-dom
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </Box>
  )
}

export default App;
