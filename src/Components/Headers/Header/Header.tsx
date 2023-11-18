import { IHeader } from "../../../Interfaces/IHeader";
import styles from "./headers.module.css";
import EditableInput from "../../EditableInput/EditableInput";

const Header: React.FC<IHeader> = (props) => {
  const { fullname, role, aboutMe } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.basicHeader}>
        <div className={styles.fullnameContainer}>
          <EditableInput
            type={"text"}
            defaultValue={`${fullname.firstname} ${fullname.lastname}`}
            className={styles.fullname}
            placeholder={"Fullname"}
          />
        </div>
        <div className={styles.roleContainer}>
          <EditableInput
            type={"text"}
            defaultValue={role}
            className={styles.role}
            placeholder={"Role"}
          />
        </div>
      </div>
      <div className={styles.aboutMeContainer}>
        <EditableInput
          type="textarea"
          defaultValue={aboutMe}
          className={styles.aboutMe}
          placeholder={"About me"}
        />
      </div>
    </div>
  );
};

export default Header;
