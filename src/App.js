import AuthRouter from "./components/AuthRouter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/layout";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<AuthRouter><Layout/></AuthRouter>}path="/"></Route>
        <Route element={<Register/>}path="/register"></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
