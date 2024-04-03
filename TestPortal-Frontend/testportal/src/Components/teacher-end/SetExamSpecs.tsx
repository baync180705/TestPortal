import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export interface ExamData {
  title: string;
  questions: number;
}

function SetExamSpecs() {
    const [title, setTitle] = useState({
        title: ""
    });

    const [questions, setQuestions] = useState({
        questions: 0
    });

    const titleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle({
          ...title,
          title: e.target.value
        }); 
    };

    const qnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuestions({
          ...questions,
          questions: parseInt(e.target.value)
        });
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

    const exportData = (data: ExamData) => {
        // Export data here
        console.log('Exported data:', data);
          };
        try {
        const combinedData: ExamData = {
            title: title.title,
            questions: questions.questions,
            };
          const response = await axios.post('http://localhost:8000/login/', combinedData);
          exportData(combinedData); 

        } catch (error) {
          console.error('Error:', error);
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Title: </label><br/>
                <input onChange={titleChange} value={title.title}/><br/>
                {/* <label>Maximum Marks: </label><br/>
                <input type="number"/><br/> */}
                <label>Number of questions: </label><br/>
                <input type="number" onChange={qnChange} value={questions.questions}/><br/>
                <Link to='/teacher/set-exam/create'><button>Submit !</button></Link>
                
            </form>
        </>
    );
}
// Define the default exam data object
export let examData: ExamData = {
    title: '',
    questions: 0
  };
  
  // Function to update examData after form submission
  export const updateExamData = (data: ExamData) => {
    examData = data;
  };
export default SetExamSpecs;
