import React, { useState } from 'react';
import axios from 'axios';

interface Question {
  id: number;
  question: string;
  options: string[];
  selectedOption: string | null;
}

function NewQuestion({ id, handleQuestionChange, handleOptionChange, handleRadioChange }: {
  id: number;
  handleQuestionChange: (id: number, question: string) => void;
  handleOptionChange: (id: number, optionIndex: number, option: string) => void;
  handleRadioChange: (id: number, selectedOption: string) => void;
}) {
  return (   
    <div>
      <label>Question</label><br/>
      <input onChange={(e) => handleQuestionChange(id, e.target.value)} /><br/>
      {['1', '2', '3', '4'].map((option, index) => (
        <div key={index}>
          {option}. <input type='text' onChange={(e) => handleOptionChange(id, index, e.target.value)} />
          <input type='radio' name={`options_${id}`} onChange={() => handleRadioChange(id, option)} />
        </div>
      ))}
    </div>
  );
}

function CreateExam() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions(prevQuestions => [...prevQuestions, { id: prevQuestions.length + 1, question: '', options: ['', '', '', ''], selectedOption: null }]);
  };

  const handleQuestionChange = (id: number, question: string) => {
    setQuestions(prevQuestions => prevQuestions.map(q => q.id === id ? { ...q, question } : q));
  };

  const handleOptionChange = (id: number, optionIndex: number, option: string) => {
    setQuestions(prevQuestions => prevQuestions.map(q => q.id === id ? { ...q, options: q.options.map((opt, index) => index === optionIndex ? option : opt) } : q));
  };

  const handleRadioChange = (id: number, selectedOption: string) => {
    setQuestions(prevQuestions => prevQuestions.map(q => q.id === id ? { ...q, selectedOption } : q));
  };

  let bhejeQuestions={
    no_of:questions.length,
    questionSet:questions,
    quiz: localStorage.getItem('name'),
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(bhejeQuestions);
    try {
      await axios.post('http://localhost:8000/quiz', bhejeQuestions);
      console.log('Questions posted successfully!');
      window.location.href = "localhost:3000/teacher/publish"
    } catch (error) {
      console.error('Error posting questions:', error);
      alert("ERROR: Please try again !");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(question => (
        <NewQuestion
          key={question.id}
          id={question.id}
          handleQuestionChange={handleQuestionChange}
          handleOptionChange={handleOptionChange}
          handleRadioChange={handleRadioChange}
        />
      ))}
      <button type="button" onClick={addQuestion}>New Question</button>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default CreateExam;
