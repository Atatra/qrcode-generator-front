"use client";

import LogoButton from "@/components/LogoButton";
import Code from "@/assets/code.svg";
import Colab from "@/assets/colab.svg";
import Download from "@/assets/download.svg";
import Share from "@/assets/share.svg";

export default function Home() {
  return (
    <main className="font-segoeui">
      <LogoButton Icon={Code} handleClick={() => {}} />
      <LogoButton Icon={Colab} handleClick={() => {}} />
      <LogoButton Icon={Download} handleClick={() => {}} />
      <LogoButton Icon={Share} handleClick={() => {}} />
    </main>
  );
}
