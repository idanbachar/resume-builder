import { useState } from "react";
import { IHeader } from "../../../Interfaces/IHeader";
import styles from "./headers.module.css";
import { MdEdit } from "react-icons/md";

const Header: React.FC<IHeader> = (props) => {
  const { fullname, image, location, phone, role, aboutMe } = props;
  const [isEditFullname, setIsEditFullname] = useState(false);
  const [isEditRole, setIsEditRole] = useState(false);
  const [isEditAboutMe, setIsEditAboutMe] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.basicHeader}>
        <div className={styles.fullnameContainer}>
          <input
            type={"text"}
            className={`${styles.fullname} inputEditAvailable`}
            defaultValue={`${fullname.firstname} ${fullname.lastname}`}
            disabled={!isEditFullname}
            style={{
              border: isEditFullname ? "2px dashed black" : "none",
            }}
          />
          <MdEdit
            className={"edit"}
            onClick={() => setIsEditFullname(!isEditFullname)}
            color={isEditFullname ? "red" : "black"}
          />
        </div>
        <div className={styles.roleContainer}>
          <input
            type={"text"}
            className={`${styles.role} inputEditAvailable`}
            defaultValue={`${role}`}
            disabled={!isEditRole}
            style={{
              border: isEditRole ? "2px dashed black" : "none",
            }}
          />
          <MdEdit
            className={"edit"}
            onClick={() => setIsEditRole(!isEditRole)}
            color={isEditRole ? "red" : "black"}
          />
        </div>
      </div>
      <div className={styles.aboutMeContainer}>
        <textarea
          defaultValue={aboutMe}
          className={`${styles.aboutMe} inputEditAvailable`}
          disabled={!isEditAboutMe}
          style={{
            border: isEditAboutMe ? "2px dashed black" : "none",
          }}
        />
        <MdEdit
          className={"edit"}
          onClick={() => setIsEditAboutMe(!isEditAboutMe)}
          color={isEditAboutMe ? "red" : "black"}
        />
      </div>
    </div>
  );
};

export default Header;
