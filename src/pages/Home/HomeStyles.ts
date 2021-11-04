import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: var(--background);
  padding: 77px 0;
`;

export const NumericMetricsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  div:last-child {
    /* margin-bottom: 0; */
  }
`

export const Headline = styled.div`
  background: var(--background);
  border-radius: 8px;
  padding: 46px;
  width: 80%;
  margin-bottom: 40px;
  margin: 80px 0;
  color: var(--light);

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const HeadlineTitle = styled.div`
  font-family: PoppinsBold;
  font-size: 32px;
`;

export const HeadlineSubTitle = styled.div`
  font-size: 16px;
  color: var(--dark);
  margin-bottom: 15px;
`;

export const HeadlineContent = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  font-family: PoppinsBold;
  font-size: 60px;
  font-weight: bold;
  color: var(--light);
  margin-bottom: 20px;
  background: var(--background);
  width: 100%;
  text-align: center;

  svg {
    height: 182px;
  }

  @media (max-width: 700px) {
    font-size: 20px;

    svg {
      height: 91px;
    }
  }
`;

export const Footer = styled.div`
  padding: 10px 0; 
`
