import { useDispatch } from "react-redux";
import { ITask, completeTask, removeTask } from "../context/tasksSlice";
import styles from "../styles/task.module.css";

const Task = ({ id, title, completed }: ITask) => {
  const dispatch = useDispatch();
  const completedClass = completed ? styles.completed : "";

  const onClickAdd = () => {
    dispatch(completeTask(id));
  };

  const onClickRemove = () => {
    dispatch(removeTask(id));
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={`${styles.title} ${completedClass}`}>{title}</h3>
      <div className={styles.actions}>
        {!completed && (
          <button
            className={`${styles.btn} ${styles.complete_btn}`}
            onClick={onClickAdd}
          >
            <svg
              width="17.188263"
              height="12.375916"
              viewBox="0 0 17.1883 12.3759"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M16.98 1.17L5.98 12.17C5.92 12.23 5.84 12.28 5.76 12.32C5.68 12.35 5.59 12.37 5.5 12.37C5.41 12.37 5.32 12.35 5.23 12.32C5.15 12.28 5.07 12.23 5.01 12.17L0.2 7.36C0.07 7.23 0 7.05 0 6.87C0 6.69 0.07 6.51 0.2 6.38C0.33 6.25 0.5 6.18 0.68 6.18C0.87 6.18 1.04 6.25 1.17 6.38L5.5 10.71L16.01 0.2C16.14 0.07 16.31 0 16.5 0C16.68 0 16.85 0.07 16.98 0.2C17.11 0.33 17.18 0.5 17.18 0.68C17.18 0.87 17.11 1.04 16.98 1.17Z"
                fill="#9E78CF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
        )}
        <button
          className={`${styles.btn} ${styles.remove_btn}`}
          onClick={onClickRemove}
        >
          <svg
            width="16.500000"
            height="17.875000"
            viewBox="0 0 16.5 17.875"
            fill="none"
          >
            <path
              id="Vector"
              d="M15.81 2.75L0.68 2.75C0.5 2.75 0.33 2.82 0.2 2.95C0.07 3.08 0 3.25 0 3.43C0 3.61 0.07 3.79 0.2 3.92C0.33 4.05 0.5 4.12 0.68 4.12L1.37 4.12L1.37 16.5C1.37 16.86 1.51 17.21 1.77 17.47C2.03 17.73 2.38 17.87 2.75 17.87L13.75 17.87C14.11 17.87 14.46 17.73 14.72 17.47C14.98 17.21 15.12 16.86 15.12 16.5L15.12 4.12L15.81 4.12C15.99 4.12 16.16 4.05 16.29 3.92C16.42 3.79 16.5 3.61 16.5 3.43C16.5 3.25 16.42 3.08 16.29 2.95C16.16 2.82 15.99 2.75 15.81 2.75ZM13.75 16.5L2.75 16.5L2.75 4.12L13.75 4.12L13.75 16.5ZM4.12 0.68C4.12 0.5 4.19 0.33 4.32 0.2C4.45 0.07 4.63 0 4.81 0L11.68 0C11.86 0 12.04 0.07 12.17 0.2C12.3 0.33 12.37 0.5 12.37 0.68C12.37 0.86 12.3 1.04 12.17 1.17C12.04 1.3 11.86 1.37 11.68 1.37L4.81 1.37C4.63 1.37 4.45 1.3 4.32 1.17C4.19 1.04 4.12 0.86 4.12 0.68Z"
              fill="#9E78CF"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Task;
