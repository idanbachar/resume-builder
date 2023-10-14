import { IHeader } from "../../Interfaces/IHeader";
import styles from "./headers.module.css";

const HeaderOne: React.FC<IHeader> = (props) => {
  const { fullname, image } = props;

  return (
    <div className={styles.headerOneContainer}>
      <div>{fullname.firstname}</div>
    </div>
  );
};

export default HeaderOne;
