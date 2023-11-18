import { IEducation } from "../../Interfaces/IEducation";
import styles from "./education.module.css";

const Education: React.FC<IEducation & { isEdit: boolean }> = (props) => {
  const { company, city, description, startDate, endDate, isEdit } = props;
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
          defaultValue={`${company},${city}`}
          disabled={!isEdit}
        />
        <div className={styles.description}>
          <input
            type={"text"}
            className={`${styles.description} inputEditAvailable`}
            defaultValue={description}
            disabled={!isEdit}
          />
        </div>
      </div>
      <span className={styles.date}>
        {endDate ? `${startDate}-${endDate}` : `${startDate} - Present`}
      </span>
    </div>
  );
};

export default Education;
