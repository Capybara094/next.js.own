"use client";

import { JSX, useState } from "react";
import CustomButton from "./components/button";
import CustomCard from "./components/card";

export default function Home() {
  const [selected, setSelected] = useState<string>("選項一");

  const descriptions: Record<string, JSX.Element> = {
    選項一: (
      <div className="space-y-4">
      <CustomCard
        title="一"
        description={`這是第一個選項的說明。\n請點選上方按鈕切換。`}
      />
      <CustomCard
        title="二"
        description={`這是第一個選項的說明。\n請點選上方按鈕切換。`}
      />
      </div>
    ),
    選項二: (
      <CustomCard
        title="選項二"
        description={`這是第二個選項的說明。\n這是一段額外說明。`}
      />
    ),
    選項三: (
      <CustomCard
        title="選項三"
        description={`這是第三個選項的說明。\n感謝使用！`}
      />
    ),
  };

  return (
    
    <div className="p-6">
      <div className="pb-6 bg-gradient-to-r from-zinc-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent flex justify-evenly">
  使用說明
</div>
      <div className="flex justify-evenly">
        {Object.keys(descriptions).map((option) => (
          <CustomButton
            key={option}
            text={option}
            onClick={() => setSelected(option)}
            isActive={selected === option}
          />
        ))}
      </div>
        <br/>
      <div className="">
        <div>{descriptions[selected]}</div>
      </div>
    </div>
  );
}
