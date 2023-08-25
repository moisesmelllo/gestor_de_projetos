import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Projects from './components/pages/Projects';
import Footer from './components/layout/Footer';


function App() {
  return (
      <Router>
        <Navbar />
        <Container customClass='start'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<Company />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/newproject' element={<NewProject />}/>
            <Route path='/projects' element={<Projects />}/>
          </Routes>
        </Container>
        <div className='footer'>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
