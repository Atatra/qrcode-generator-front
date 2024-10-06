"use client";

import LogoButton from "@/components/LogoButton";
import Code from "@/assets/code.svg";
import Colab from "@/assets/colab.svg";
import Download from "@/assets/download.svg";
import Share from "@/assets/share.svg";

import styles from "@/components/UserOptions.module.css";
import "react-spring-bottom-sheet/dist/style.css";

import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import DownloadOptions from "./DownloadOptions/DownloadOptions";

const UserOptions = () => {
  const [downloadOpen, setDownloadOpen] = useState(false);

  const handleCode = () => {
    /** TODO: Copy request to send */
  };

  const handleColab = () => {
    /** TODO: We'll see */
  };

  const handleDownload = () => {
    /** TODO: Expand download options */
    setDownloadOpen(true);
  };

  const handleShare = () => {
    /** TODO: Share link of current real-time editable form */
  };

  return (
    <section className={styles.optionsContainer}>
      <LogoButton Icon={Code} handleClick={handleCode} />
      <LogoButton Icon={Colab} handleClick={handleColab} />
      <LogoButton Icon={Download} handleClick={handleDownload} />
      <LogoButton Icon={Share} handleClick={handleShare} />
      <BottomSheet
        open={downloadOpen}
        onDismiss={() => setDownloadOpen(false)}
        snapPoints={({ minHeight }) => minHeight}
      >
        <DownloadOptions setUpSheetOpen={setDownloadOpen} />
      </BottomSheet>
    </section>
  );
};

export default UserOptions;
