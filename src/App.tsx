import { BrowserRouter as Router } from "react-router-dom";
import HomeRoutes from "./routes"


function App() {

  return (
  
      <Router basename="/genai-web/">
        <HomeRoutes />
      </Router>
    
  )
}

export default App