import { IExperience } from "../../Interfaces/IExperience";
import styles from "./experience.module.css";

const Experience: React.FC<IExperience & { isEdit: boolean }> = (props) => {
  const { company, role, duties, startDate, endDate, isEdit } = props;
  return (
    <div
      className={styles.mainContainer}
      style={{
        border: isEdit ? "2px dashed black" : "none",
      }}
    >
      <div className={styles.companyContainer}>
        <input
          type={"text"}
          className={`${styles.company} inputEditAvailable`}
          defaultValue={company}
          disabled={!isEdit}
          placeholder={"Company name"}
          maxLength={70}
        />
      </div>
      <input
        type={"text"}
        className={`${styles.role} inputEditAvailable`}
        defaultValue={role}
        disabled={!isEdit}
        placeholder={"Role"}
        maxLength={40}
      />
      <ul className={styles.dutiesContainer}>
        {duties.map((duty, index) => (
          <li key={index}>
            <input
              type={"text"}
              className={`${styles.duty} inputEditAvailable`}
              defaultValue={duty}
              disabled={!isEdit}
              placeholder={`Duty ${index + 1}`}
              maxLength={100}
            />
          </li>
        ))}
      </ul>
      <input
        type={"text"}
        className={`${styles.date} inputEditAvailable`}
        defaultValue={
          endDate ? `${startDate}-${endDate}` : `${startDate} - Present`
        }
        disabled={!isEdit}
        placeholder={"Start date - End date"}
        maxLength={35}
      />
    </div>
  );
};

export default Experience;
