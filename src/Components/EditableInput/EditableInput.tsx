import { MdEdit } from "react-icons/md";
import { IEditableInput } from "../../Interfaces/IEdit";
import { useState } from "react";

const EditableInput: React.FC<IEditableInput> = (props) => {
  const { className, defaultValue, type, placeholder, maxLength } = props;
  const [isEdit, setIsEdit] = useState(false);

  const inputProps = {
    type,
    className: `${className} inputEditAvailable`,
    defaultValue,
    disabled: !isEdit,
    style: { border: isEdit ? "2px dashed black" : "none" },
    placeholder,
    maxLength,
  };

  return (
    <>
      {type === "text" ? (
        <input {...inputProps} />
      ) : (
        <textarea {...inputProps} />
      )}
      <MdEdit
        className={"edit"}
        onClick={() => setIsEdit(!isEdit)}
        color={isEdit ? "red" : "black"}
      />
    </>
  );
};

export default EditableInput;
