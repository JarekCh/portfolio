import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SharedLayout from './pages/SharedLayout';
import SharedProjectLayout from './pages/SharedProjectLayout';
import SingleProject from './pages/SingleProject';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />          
          <Route path='projects' element={<SharedProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path=':slug' element={<SingleProject />} />            
          </Route>
          <Route path='contact' element={<Contact />} />  
          <Route path='*' element={<Error />} />        
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
