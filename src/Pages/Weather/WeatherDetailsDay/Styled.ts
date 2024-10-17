import styled from "styled-components";

export const WeatherStyledContainerDay = styled.div`
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  gap: 2rem;

  .Details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSizeMedium};
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      span {
        font-size: ${({ theme }) => theme.fontSizeMedium};
      }
    }
  }
`;

export const WeatherStyledTitleDay = styled.h2`
  text-align: center;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizeBig};
`;
