"use client";

import styles from "@/components/LogoButton.module.css";
import React from "react";

interface Props {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  handleClick: () => void;
}

const LogoButton = ({ Icon, handleClick }: Props) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      <Icon width={24} height={24} />
    </button>
  );
};

export default LogoButton;
