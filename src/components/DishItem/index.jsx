import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

export function DishItem ({ isNew, onClick, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input 
      type="text"
      readOnly={!isNew}
      value={value}
      {...rest}
      />

      <button 
      type="button"
      onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}