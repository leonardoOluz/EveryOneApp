import styled from "styled-components";
import Loader from "../../../../components/Loader";

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
`;


const Overlay = () => {
  return (<Container>
    <Loader />
  </Container>)
};

export default Overlay;