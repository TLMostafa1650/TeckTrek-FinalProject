import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Programs from '../pages/Programs';
import ProgramDetails from '../pages/ProgramDetails';
import About from '../pages/About';
import Departments from '../pages/Departments';
import DepartmentDetails from '../pages/DepartmentDetails';
import News from '../pages/News/News';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import Announcements from '../pages/Announcements/Announcements';
import Events from '../pages/Events/Events';
import Contact from '../pages/Contact/Contact';
import Faculty from '../pages/Faculty';
import FacultyDetails from '../pages/FacultyDetails/FacultyDetails';
import Services from '../pages/Services';
import NotFound from '../pages/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:id" element={<DepartmentDetails />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:id" element={<ProgramDetails />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="faculty/:id" element={<FacultyDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
