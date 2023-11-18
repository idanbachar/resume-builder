import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf } from "react-icons/fa";

interface DownloadPDFButtonProps {
  content: JSX.Element;
  fileName: string;
}

const handleEditIcons = (visibility: "hidden" | "visible") => {
  const editIcons = document.getElementsByClassName("edit");
  Array.from(editIcons).map(
    (editIcon) => ((editIcon as HTMLElement).style.visibility = visibility)
  );
};

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({
  content,
  fileName,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (contentRef.current) {
      const contentElement = contentRef.current;
      (contentElement.children[0] as HTMLElement).style.boxShadow = "unset";
      handleEditIcons("hidden");

      const canvas = await html2canvas(contentElement);
      const pdf = new jsPDF();

      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );

      pdf.save(fileName);
      (contentElement.children[0] as HTMLElement).style.boxShadow =
        "0 4px 8px 0 rgba(0, 0, 0, 0.2)";

      handleEditIcons("visible");
    }
  };

  return (
    <>
      <div className="App-header">
        <div
          style={{ maxWidth: "70rem", width: "100%", background: "white" }}
          ref={contentRef}
        >
          {content}
        </div>
      </div>
      <FaFilePdf
        size={"40"}
        className="saveAsPdfButton"
        onClick={handleDownload}
      />
    </>
  );
};

export default DownloadPDFButton;
