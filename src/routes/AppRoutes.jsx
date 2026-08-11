import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import PlaceholderPage from '../pages/PlaceholderPage';
import Programs from '../pages/Programs';
import ProgramDetails from '../pages/ProgramDetails';
import About from '../pages/About';
import Departments from '../pages/Departments';
import DepartmentDetails from '../pages/DepartmentDetails';

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
        <Route path="news" element={<PlaceholderPage />} />
        <Route path="announcements" element={<PlaceholderPage />} />
        <Route path="faculty" element={<PlaceholderPage />} />
        <Route path="services" element={<PlaceholderPage />} />
        <Route path="events" element={<PlaceholderPage />} />
        <Route path="contact" element={<PlaceholderPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
