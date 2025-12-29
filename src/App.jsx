// import { Typography, Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App











// <Typography variant='h3' component={"h3"} sx={{color: "red", fontWeight: 700}}>
//   Hello World!
// </Typography>

// <Button variant='contained' color='success' sx={{mt: "10px"}}>Click Me</Button>
// <Button variant='text' color='secondary' sx={{marginRight: "40px"}}>Click Me</Button>
// <Button variant='outlined' color='error' onClick={() => alert("you clicked")}>Click me for action</Button>
