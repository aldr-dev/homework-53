import React from 'react';

interface Props {
  task: {
    id: string;
    message: string;
  };
  onDelete: (id: string) => void;
}

const Task: React.FC<Props> = ({task, onDelete}) => {
  return (
    <div className="container-tasks">
      <p className="message">{task.message}</p>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;