import { IHeader } from "../../../Interfaces/IHeader";
import styles from "./headers.module.css";

const Header: React.FC<IHeader> = (props) => {
  const { fullname, image, location, phone, role, aboutMe } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.basicHeader}>
        <h3 className={styles.fullname}>
          {fullname.firstname} {fullname.lastname}
        </h3>
        <span className={styles.role}>{role}</span>
      </div>
      <div
        className={styles.aboutMe}
        dangerouslySetInnerHTML={{ __html: aboutMe }}
      ></div>
    </div>
  );
};

export default Header;
