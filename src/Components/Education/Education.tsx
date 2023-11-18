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
          maxLength={70}
        />
        <div className={styles.description}>
          <input
            type={"text"}
            className={`${styles.description} inputEditAvailable`}
            defaultValue={description}
            disabled={!isEdit}
            maxLength={100}
          />
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Education;
