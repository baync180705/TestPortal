import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TestPage from './TestPage';

interface Quiz {
  id: number;
  title: string;
  maxMarks: number;
  author: string;
}

function PushTestCard({ title, maxMarks, author }: Quiz) {
  return (
    <div className="test-card">
      <span>Test: {title}</span>
      <span>MM: {maxMarks}</span>
      <span>by {author}</span>
      <Link to="/student/test"><button>Start</button></Link>
    </div>
  );
}

const MainMenu: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Quiz[]>('http://localhost:8000/quiz');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <div id="main-menu">
        {quizzes.map(quiz => (
          <PushTestCard
            id={quiz.id}
            title={quiz.title}
            maxMarks={quiz.maxMarks}
            author={quiz.author}
          />
        ))}
      </div>
      <div id="test-menu"></div>
    </>
  );
};

export default MainMenu;
