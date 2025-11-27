
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from "./Pages/NoPage";
import Project from "./Pages/Project";
import ProjectDetail from "./Pages/ProjectDetail";
import Contact from "./Pages/Contact";
import Navigation from "./components/Navbar";
import './App.css'



function App() {


  return (


    <HashRouter basename="/portfolio-website/">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
          <Route path="/projectdetail/:projectId" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )


}

export default App
