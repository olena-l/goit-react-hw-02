import styles from './Description.module.css';

const Description = ({ title, content }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p>{content}</p>
    </>
  );
};

export default Description;
