import { useState } from "react";
import Select from "react-select";

const DropDownSet = ({ dropOption }) => {
  // Set default selected value
  const [selectedOption, setSelectedOption] = useState(dropOption[0]); // Default to first option

  return (
    <Select
      options={dropOption}
      placeholder="Select"
      isSearchable={false}
      value={selectedOption} // Set selected value
      onChange={setSelectedOption} // Update selected value on change
    />
  );
};

export default DropDownSet;
