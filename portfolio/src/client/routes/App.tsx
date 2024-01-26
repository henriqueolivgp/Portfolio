
import {Outlet} from 'react-router-dom';
import { BottomNavBar } from '../components/BottomNavBar';


function App() {


  return (
    <>
      
			<Outlet />
			<BottomNavBar/>
    </>
  )
}

export default App;