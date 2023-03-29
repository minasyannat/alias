
import './App.css';
import Header from './components/Header/Header';
import {TextField} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <TextField id="standard-basic" label="Team 1 name" variant="standard" />
      <TextField id="standard-basic" label="Team 2 name" variant="standard" />
    </div>
  );
}

export default App;
