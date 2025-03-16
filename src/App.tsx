import { BrowserRouter as Router } from "react-router-dom";
import HomeRoutes from "./routes"


function App() {

  return (
  
      <Router>
        <HomeRoutes />
      </Router>
    
  )
}

export default App