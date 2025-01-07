import { AllRoutes } from "./routes/AllRoutes";
import {Header, Team, Footer} from "./components";
import './App.css';

function App() {

  return (
    <>
      <div className="App">
          <Header/>
          <AllRoutes/>
          <Team/>
          <Footer/>
      </div>
    </>
  )
}

export default App
