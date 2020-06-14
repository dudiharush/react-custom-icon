import * as React from "react";
import { createIconMap, getCustomIcon } from "./CustomIcon/CustomIcon";

const map = createIconMap({
  IconName1: {
    content: (
      <path
        fillRule="evenodd"
        d="M16 7H2V3h4.046l1.059 2H16v2zM2 15h14V9H2v6zM8 3L7 1H1.065C.474 1 0 1.475 0 2.024V16c0 .615.41 1 1.065 1H17c.496 0 1-.512 1-1V4c0-.533-.452-1-1-1H8z"
      />
    ),
    viewBoxSize: 18
  },
  IconName2: {
    content: (
      <path
        fillRule="evenodd"
        d="M16 7H2V3h4.046l1.059 2H16v2zM2 15h14V9H2v6zM8 3L7 1H1.065C.474 1 0 1.475 0 2.024V16c0 .615.41 1 1.065 1H17c.496 0 1-.512 1-1V4c0-.533-.452-1-1-1H8z"
      />
    ),
    viewBoxSize: 18
  },
  IconName3: {
    content: (
      <path d="M9 1c1.657 0 3 1.343 3 3 0 .757-.28 1.448-.743 1.976l3.063 5.101c.219-.05.446-.077.68-.077 1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.306 0-2.417-.834-2.829-2H5.829C5.417 16.167 4.306 17 3 17c-1.657 0-3-1.343-3-3s1.343-3 3-3c.241 0 .476.029.701.082l3.012-5.14C6.268 5.417 6 4.74 6 4c0-1.657 1.343-3 3-3zM3 13c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm12 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM8.442 6.948l-3.061 5.226c.19.248.342.526.448.826h6.342c.108-.307.266-.592.462-.844l-3.12-5.2C9.348 6.985 9.176 7 9 7c-.19 0-.377-.018-.558-.052zM9 3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
    ),
    viewBoxSize: 18
  }
});

export function App() {
  const CustomIcon = getCustomIcon(map);
  return (
    <div>
      <CustomIcon size={18} color="blue" stroke="black" type="IconName1" />
    </div>
  );
}
