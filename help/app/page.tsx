"use client";

import { useState } from "react";
import CustomButton from "./components/button";

export default function Home() {
  const [selected, setSelected] = useState<string>("選項一");

  const descriptions: Record<string, string> = {
    選項一: "這是第一個選項的說明。",
    選項二: "這是第二個選項的說明。",
    選項三: "這是第三個選項的說明。",
  };

  return (
    <div className="p-6">
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

      <div className="mt-4 p-4 border rounded">
        <p>{descriptions[selected]}</p>
      </div>
    </div>
  );
}
