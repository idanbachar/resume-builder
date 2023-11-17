import { IEducation } from "../../Interfaces/IEducation";
import styles from "./education.module.css";

const Education: React.FC<IEducation> = (props) => {
  const { company, city, description, startDate, endDate } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.companyContainer}>
        <h2 className={styles.company}>
          {company},{city}
        </h2>
        <div className={styles.description}>{description}</div>
      </div>
      <span className={styles.date}>
        {endDate ? `${startDate}-${endDate}` : `${startDate} - Present`}
      </span>
    </div>
  );
};

export default Education;
