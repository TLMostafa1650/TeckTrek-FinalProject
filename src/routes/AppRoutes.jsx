import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import PlaceholderPage from '../pages/PlaceholderPage';
import News from '../pages/News/News';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import Announcements from '../pages/Announcements/Announcements';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<PlaceholderPage />} />
        <Route path="departments" element={<PlaceholderPage />} />
        <Route path="programs" element={<PlaceholderPage />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="faculty" element={<PlaceholderPage />} />
        <Route path="services" element={<PlaceholderPage />} />
        <Route path="events" element={<PlaceholderPage />} />
        <Route path="contact" element={<PlaceholderPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
