import { useState } from "react";

const validateEnum = (enums, value) => {
  if (!Object.values(enums).includes(value)) {
    const enumValues = Object.values(enums);
    throw new Error(
      "The value must be one of the following: " + enumValues.join(", ")
    );
  }
};

export const useEnum = (enums, initEnum) => {
  const [state, setState] = useState(initEnum);

  validateEnum(enums, initEnum);

  const setEnum = value => {
    validateEnum(enums, value);
    return setState(value);
  };

  return [state, setEnum];
};
