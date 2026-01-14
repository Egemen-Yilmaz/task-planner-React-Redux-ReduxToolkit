import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import { Button } from '../Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value;
    
    if (text.trim() === '') {
      return;
    }

    dispatch(addTask({
      id: Date.now(),
      text,
      completed: false,
    }));
    
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
