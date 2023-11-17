import { ITitle } from "../../Interfaces/ITitle";

const Title: React.FC<ITitle> = (props) => {
  const { text } = props;

  return (
    <>
      <h4
        style={{
          textAlign: "start",
          padding: ".5rem",
          borderLeft: "2px solid black",
        }}
      >
        {text}
      </h4>
    </>
  );
};

export default Title;
