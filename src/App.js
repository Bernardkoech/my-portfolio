import React from 'react';
import "./App.css";
import About from './components/About/About';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import About3 from "./components/About3/About3";
import ProjectDetails from './components/ProjectDetails/ProjectDetails'; // Import the ProjectDetails component
import barotechImage from './assets/images/Barotech.png';
import wasichana from './assets/images/wasichana.png';
import portfolio from "./assets/images/portfolio.png";
import { createAnalytics } from '@vercel/analytics';



const App = () => {


const analytics = createAnalytics({
  projectId: 'prj_fz4lKXblwLKolOcYMNJTyhsSmAWp', // Replace with your Vercel Project ID
});
  // Define the projects array
  const projects = [
    {
      id: 'project1',
      name: 'Barotech',
      description: 'A landing page for a Solar installation company',
      image: barotechImage,
      website: 'https://barotech3-bernardkoech.vercel.app/',
    },
    {
      id: 'project2',
      name: 'Tuinue Wasichana',
      description: 'An app that enables users to donate to different charities',
      image: wasichana,
      website: 'https://tuinue-waichana.onrender.com/',
    },
    {
      id: 'project3',
      name: 'My portfolio',
      description: 'My own portfolio app',
      image: portfolio,
      website: 'https://bkoech.vercel.app/',
    },
  ];

  return (
    <Router>
      <div className='App'>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about3" element={<About3 />} />
          {/* Pass the projects array as a prop to the Projects component */}
          <Route path='/projects' element={<Projects projects={projects} />} />
          <Route path='/projects/:projectId' element={<ProjectDetails projects={projects} />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
