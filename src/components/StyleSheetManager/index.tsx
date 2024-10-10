import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
interface IProps {
  children: React.ReactNode 
}
const StiloSheetManager = ({children}: IProps) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}
    >
      {children}
    </StyleSheetManager>
  )
}

export default StiloSheetManager;