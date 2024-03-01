import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Resume from "./Resume";
import "./styles.css";

const PDF = () => {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="App">
        <div className="mb5">
          <button onClick={printDocument}>Print</button>
        </div>
        <div id="divToPrint" ref={inputRef}>
          <div>Note: Here the dimensions of div are same as A4</div>
          <Resume></Resume>
        </div>
      </div>
    </>
  );
};
export default PDF;