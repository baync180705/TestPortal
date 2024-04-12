import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

function SetSpecs() {
  const [name, setName] = useState({
    name: '',
  });
  const [schedule, setSchedule] = useState({
    scheduled: '',
  });
  const [deadline, setDeadline] = useState({
    deadline: '',
  });

  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(prevState => ({
      ...prevState,
      name: e.target.value
    }));
  };
  const handleScheduleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSchedule(prevState => ({
      ...prevState,
      scheduled: e.target.value
    }));
  };
  const handleDeadlineChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(prevState => ({
      ...prevState,
      deadline: e.target.value
    }));
  };

const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    const userData = {
      quizName: name.name,
      time_scheduled: schedule.scheduled,
      time_ending: deadline.deadline,
    };
    
    try {
        const response = await axios.post('http://localhost:8000/specs', userData);
        console.log(response.data);
        window.location.href = 'http://localhost:3000/teacher/create';
    } catch (error) {
        console.error('Error:', error);
        alert("ERROR: Try again!");
    }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name.name} onChange={handleNameChange}  placeholder="Name"/>
        <input type="datetime-local" name="scheduledAt" value={schedule.scheduled} onChange={handleScheduleChange} placeholder="Scheduled at" />
        <input type="datetime-local" name="deadlineAt" value={deadline.deadline} onChange={handleDeadlineChange} placeholder="Deadline at" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SetSpecs;