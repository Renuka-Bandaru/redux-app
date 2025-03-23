import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/LoginForm/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
