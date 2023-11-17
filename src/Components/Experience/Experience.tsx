import { IExperience } from "../../Interfaces/IExperience";
import styles from "./experience.module.css";

const Experience: React.FC<IExperience> = (props) => {
  const { company, role, duties } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.basicHeader}>
        <h3 className={styles.company}></h3>
        <span className={styles.role}>{}</span>
      </div>
    </div>
  );
};

export default Experience;
