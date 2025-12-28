import { Typography, Button } from '@mui/material';
import './App.css';


function App() {

  return (
    <div>
      <Typography variant='h3' component={"h3"} sx={{color: "red", fontWeight: 700}}>
        Hello World!
      </Typography>

      <Button variant='contained'>Click Me</Button>
      <Button variant='text'>Click Me</Button>
      <Button variant='outlined'>Click Me</Button>
    </div>
  )
}

export default App
