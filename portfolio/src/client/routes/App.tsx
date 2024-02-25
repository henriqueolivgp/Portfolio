import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../screens/footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
