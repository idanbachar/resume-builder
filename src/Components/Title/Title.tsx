import { ITitle } from "../../Interfaces/ITitle";

const Title: React.FC<ITitle> = (props) => {
  const { text, isEdit = false } = props;

  return (
    <>
      <h4
        style={{
          textAlign: "start",
          padding: ".5rem",
          borderLeft: "2px solid black",
          color: isEdit ? "red" : "black",
        }}
      >
        {text}
      </h4>
    </>
  );
};

export default Title;
