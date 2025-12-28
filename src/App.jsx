import { Typography, Button } from '@mui/material';
import './App.css';


function App() {

  return (
    <div>
      <Typography variant='h3' component={"h3"} sx={{color: "red", fontWeight: 700}}>
        Hello World!
      </Typography>

      <Button variant='contained' color='success' sx={{mt: "10px"}}>Click Me</Button>
      <Button variant='text' color='secondary' sx={{marginRight: "40px"}}>Click Me</Button>
      <Button variant='outlined' color='error' onClick={() => alert("you clicked")}>Click me for action</Button>
    </div>
  )
}

export default App
