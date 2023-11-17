import Experience from "../Experience/Experience";
import Header from "../Headers/Header/Header";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header
        fullname={{ firstname: "Ezio", lastname: "Auditore" }}
        role="Frontend developer"
        location="Italy, Roma"
        phone="00000000"
        aboutMe="
        Innovative Senior Frontend Web Developer with years of experience working with React, TypeScript, JavaScript and CSS. Excellent team worker, friendly, fast self-learner, with good energy and vibes, eager to learn more.
        "
      />
      <Experience duties={[]} company="" role="" />
    </div>
  );
};

export default Resume;
