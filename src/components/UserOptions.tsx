"use client";

import LogoButton from "@/components/LogoButton";
import Code from "@/assets/code.svg";
import Colab from "@/assets/colab.svg";
import Download from "@/assets/download.svg";
import Share from "@/assets/share.svg";

import styles from "@/components/UserOptions.module.css";

const UserOptions = () => {
  const handleCode = () => {
    /** TODO: Copy request to send */
  };

  const handleColab = () => {
    /** TODO: We'll see */
  };

  const handleDownload = () => {
    /** TODO: Expand download options */
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
    </section>
  );
};

export default UserOptions;
