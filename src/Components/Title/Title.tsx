import { ITitle } from "../../Interfaces/ITitle";

const Title: React.FC<ITitle> = (props) => {
  const { text } = props;

  return (
    <>
      <h3 style={{ textAlign: "start", borderLeft: "1px solid black" }}>
        {text}
      </h3>
    </>
  );
};

export default Title;
