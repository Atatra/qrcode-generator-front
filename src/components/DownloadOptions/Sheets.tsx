import { Slider } from "@mui/material";
import { FormEvent, useState } from "react";
import styles from "./Sheets.module.css";

const quality: { [key: number]: string } = {
  1: "Lowest",
  2: "Low",
  3: "Medium",
  4: "Medium-high",
  5: "High",
  6: "Highest",
};

function qualityText(value: number) {
  return quality[value] || "Unknown";
}

function formatQualityLabel(value: number) {
  return `${quality[value] || "Unknown"} quality`;
}

function sizeText(value: number) {
  return `${value} pixels`;
}
function formatSizeLabel(value: number) {
  return `${value}px`;
}

interface Props {
  fileType: string | null;
  closeSheets: () => void;
}

const Sheets = ({ fileType, closeSheets }: Props) => {
  const [sliderSize, setSliderSize] = useState<number>(512);
  const [sliderQuality, setSliderQuality] = useState<number>(1);
  const handleSizeChange = (event: Event, value: number | number[]) => {
    setSliderSize(value as number);
  };
  const handleQualityChange = (event: Event, value: number | number[]) => {
    setSliderQuality(value as number);
  };

  const handleDownlaod = (event: FormEvent) => {
    event.preventDefault();
    console.log("Downloading");
    closeSheets();
  };

  if (!fileType) return null;
  return (
    <form
      className="p-4 font-segoeui"
      onSubmit={(event) => handleDownlaod(event)}
    >
      <h1>Download {fileType}</h1>
      {(fileType === "PNG" || fileType === "JPG" || fileType === "PDF") && (
        <section>
          <h2>Size</h2>
          <div className="flex justify-center">
            <div className=" w-[85%]">
              <Slider
                className="p-4"
                aria-label={`${fileType} size`}
                defaultValue={512}
                getAriaValueText={sizeText}
                valueLabelDisplay="auto"
                valueLabelFormat={formatSizeLabel}
                shiftStep={128}
                step={128}
                marks
                min={128}
                max={1024}
                color="primary"
                onChange={handleSizeChange}
              />
            </div>
          </div>
          <p>
            {sliderSize} &nbsp;×&nbsp; {sliderSize} px
          </p>
        </section>
      )}
      <section>
        <h2>Quality</h2>
        <div className="flex justify-center">
          <div className=" w-[85%]">
            <Slider
              aria-label={`${fileType} Quality`}
              defaultValue={1}
              getAriaValueText={qualityText}
              valueLabelDisplay="auto"
              valueLabelFormat={qualityText}
              shiftStep={1}
              step={1}
              marks
              min={1}
              max={6}
              color="info"
              onChange={handleQualityChange}
            />
          </div>
        </div>
        <p>{formatQualityLabel(sliderQuality)}</p>
      </section>
      <button className={styles.button} type="submit">
        Download
      </button>
    </form>
  );
};

export default Sheets;
