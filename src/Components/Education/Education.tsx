import { MdEdit } from "react-icons/md";
import { IEducation } from "../../Interfaces/IEducation";
import styles from "./education.module.css";
import { useState } from "react";

const Education: React.FC<IEducation> = (props) => {
  const { company, city, description, startDate, endDate } = props;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={styles.mainContainer}
      style={{
        border: isEdit ? "2px dashed black" : "none",
      }}
    >
      <MdEdit
        className={"edit"}
        onClick={() => setIsEdit(!isEdit)}
        color={isEdit ? "red" : "black"}
      />
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
