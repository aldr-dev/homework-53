import React, {ChangeEvent, useState} from 'react';

interface Props {
  onSubmit: (message: string) => void;
}

const AddTaskForm: React.FC<Props> = ({onSubmit}) => {
  const [taskMessage, setTaskMessage] = useState<string>('');

  const onFieldChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = (event.target as HTMLTextAreaElement).value;
    setTaskMessage(newValue);
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskMessage.trim()) {
      onSubmit(taskMessage);
      setTaskMessage('');
    }
  };

  return (
    <form className="form-task" onSubmit={onFormSubmit}>
      <textarea className="task-message" required onChange={onFieldChange} placeholder="Add new task"/>
      <button className="send-btn" type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;