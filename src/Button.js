import { memo } from "react";

function Button({ children, onClick }) {
  return <span onClick={onClick}>{children}</span>;
}

export default memo(Button);
