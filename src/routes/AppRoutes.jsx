import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Services from '../pages/Services';

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
        <Route path="services" element={<Services />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
