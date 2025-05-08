import styles from './Feedback.module.css';

const Feedback = ({
  feedback: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={styles.feedback}>Good: {good}</li>
      <li className={styles.feedback}>Neutral: {neutral}</li>
      <li className={styles.feedback}>Bad: {bad}</li>
      <li className={styles.feedback}>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;
