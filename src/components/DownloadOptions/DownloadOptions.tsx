import { BottomSheet } from "react-spring-bottom-sheet";
import styles from "./DownloadOptions.module.css";
import Item from "./Item";
import PngJpgSheet from "./Sheets";
import { useState } from "react";
import Sheets from "./Sheets";

interface Props {
  setUpSheetOpen: (open: boolean) => void;
}

type Format = "PNG" | "JPG" | "SVG" | "PDF" | null;

const DownloadOptions = ({ setUpSheetOpen }: Props) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [selected, setSelected] = useState<Format>(null);

  const imgPlaceholder = "/images/img-placeholder.svg";
  const svgPlaceholder = "/images/svg-placeholder.svg";
  const pdfPlaceholder = "/images/pdf-placeholder.svg";

  const handlePNG = () => {
    /** TODO: Size, Quality page */
    setSelected("PNG");
    setOpenSheet(true);
  };

  const handleJPG = () => {
    /** TODO: Size, Quality page */
    setSelected("JPG");
    setOpenSheet(true);
  };

  const handleSVG = () => {
    /** Quality */
    setSelected("SVG");
    setOpenSheet(true);
  };

  const handlePDF = () => {
    /** TODO: Something */
    setSelected("PDF");
    setOpenSheet(true);
  };

  const closeSheets = () => {
    setOpenSheet(false);
    setUpSheetOpen(false);
  };

  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Item title="PNG" logoSrc={imgPlaceholder} handleClick={handlePNG} />
        </li>
        <li className={styles.listItem}>
          <Item title="JPG" logoSrc={imgPlaceholder} handleClick={handleJPG} />
        </li>
        <li className={styles.listItem}>
          <Item title="SVG" logoSrc={svgPlaceholder} handleClick={handleSVG} />
        </li>
        <li className={styles.listItem}>
          <Item title="PDF" logoSrc={pdfPlaceholder} handleClick={handlePDF} />
        </li>
      </ul>

      <BottomSheet
        open={openSheet}
        onDismiss={() => setOpenSheet(false)}
        snapPoints={({ minHeight }) => minHeight}
      >
        <Sheets fileType={selected} closeSheets={closeSheets} />
      </BottomSheet>
    </div>
  );
};

export default DownloadOptions;
