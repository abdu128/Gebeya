import logo from './logo.svg';
import './App.css';
import './pages/home';
import './pages/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;
