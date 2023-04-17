
import { useSelector } from 'react-redux';
import './App.css';
import { PAGE_BY_STAGE } from './helpers/constants/pages';


function App() {

  const selectStage= (state)=> state.stage
  const stage = useSelector(selectStage)



  const CurrentPage= PAGE_BY_STAGE[stage]
  return (
    <div className="App">
      <CurrentPage />
    </div>
  );
}

export default App;
