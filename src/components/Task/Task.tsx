import React from 'react';
import './Task.css';

interface Props {
  task: {
    id: string;
    message: string;
  };
  onDelete: (id: string) => void;
}

const Task: React.FC<Props> = ({task, onDelete}) => {
  return (
    <div className="task-inner">
      <div className="message-inner">
        <p className="message">{task.message}</p>
        <button type="button" className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};


export default Task;