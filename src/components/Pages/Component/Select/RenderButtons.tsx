import React, { useState, FC } from "react";
import Select from "./Select";



export default function ButtonGroup({ buttons }: { buttons: string[] }) {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    console.log(buttonName)
    setSelectedButton(buttonName);
  };

  const renderButtons = (): React.ReactElement[] => {
    return buttons.map((buttonName: string): React.ReactElement => {
      const isSelected = (selectedButton === buttonName);
      const buttonClass = isSelected ? "Active" : "";

      return (
        <Select
          key={buttonName}
          state={buttonClass}
          onClick={() => handleButtonClick(buttonName)}
          text={buttonName}
        />
      );
    });
  };

  return <>{renderButtons()}</>;
}

