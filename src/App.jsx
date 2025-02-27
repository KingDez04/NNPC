import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default App;
