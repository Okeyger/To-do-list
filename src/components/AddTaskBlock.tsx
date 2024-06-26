import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../context/tasksSlice";
import styles from "../styles/addTaskBlock.module.css";

const AddTaskBlock = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickClear = () => {
    setValue("");
    inputRef.current?.focus();
  };

  const onClickAdd = () => {
    dispatch(
      addTask({
        id: Date.now(),
        title: value,
        completed: false,
      })
    );
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_container}>
        <input
          className={styles.add_input}
          type="text"
          placeholder="Add a new task"
          value={value}
          onChange={onChangeInput}
          ref={inputRef}
        />
        {value && (
          <button className={styles.clear_btn} onClick={onClickClear}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <button className={styles.add_btn} onClick={onClickAdd} disabled={!value}>
        <svg
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            id="Vector"
            d="M24 12C24 12.26 23.89 12.51 23.7 12.7C23.51 12.89 23.26 13 23 13L13 13L13 23C13 23.26 12.89 23.51 12.7 23.7C12.51 23.89 12.26 24 12 24C11.73 24 11.48 23.89 11.29 23.7C11.1 23.51 11 23.26 11 23L11 13L1 13C0.73 13 0.48 12.89 0.29 12.7C0.1 12.51 0 12.26 0 12C0 11.73 0.1 11.48 0.29 11.29C0.48 11.1 0.73 11 1 11L11 11L11 1C11 0.73 11.1 0.48 11.29 0.29C11.48 0.1 11.73 0 12 0C12.26 0 12.51 0.1 12.7 0.29C12.89 0.48 13 0.73 13 1L13 11L23 11C23.26 11 23.51 11.1 23.7 11.29C23.89 11.48 24 11.73 24 12Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddTaskBlock;
