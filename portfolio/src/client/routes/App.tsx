import { Outlet } from "react-router-dom";
import { BottomNavBar } from "../components/BottomNavBar";
// import { OtherBottomNav } from '../components/OtherBottomNav';

function App() {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
}

export default App;
