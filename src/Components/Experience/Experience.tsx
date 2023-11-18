import { IExperience } from "../../Interfaces/IExperience";
import { useState } from "react";
import styles from "./experience.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CreateNewDuty } from "../../Services/Helpers";

const Experience: React.FC<IExperience & { isEdit: boolean }> = (props) => {
  const {
    company,
    role,
    duties: dutiesList,
    startDate,
    endDate,
    isEdit,
  } = props;

  const [duties, setDuties] = useState<string[]>([...dutiesList]);

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
        {isEdit && (
          <li>
            <div className={styles.plusMinusButtons}>
              <FaPlus
                className={"plusMinusButton"}
                style={{ color: "green" }}
                onClick={() => {
                  const newDuty = CreateNewDuty();
                  setDuties([...duties, newDuty]);
                }}
              />
              {duties.length > 0 && (
                <FaMinus
                  className={"plusMinusButton"}
                  style={{ color: "red" }}
                  onClick={() => {
                    const allDuties = [...duties];
                    allDuties.pop();
                    setDuties([...allDuties]);
                  }}
                />
              )}
            </div>
          </li>
        )}
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
