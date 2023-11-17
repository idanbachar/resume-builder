import { IExperience } from "../../Interfaces/IExperience";
import { FormatDateString } from "../../Services/DateService";
import styles from "./experience.module.css";

const Experience: React.FC<IExperience> = (props) => {
  const { company, role, duties, startDate, endDate } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.companyContainer}>
        <h2 className={styles.company}>{company}</h2>
        <span className={styles.company}>
          {/* {endDate
            ? `${FormatDateString(startDate)}-${FormatDateString(endDate)}`
            : `${FormatDateString(startDate)} - Present`} */}
        </span>
      </div>
      <span className={styles.role}>{role}</span>
      <div>
        <ul className={styles.dutiesContainer}>
          {duties.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
