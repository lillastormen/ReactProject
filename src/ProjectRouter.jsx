// Routes.jsx
import { useState } from "react";
import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './views/index.jsx';
import Quiz from './views/quiz.jsx';
import Result from './views/quiz.jsx';


const ProjectRouter = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />}/>
      </Routes>
    </Router>
  );
};

export default ProjectRouter;