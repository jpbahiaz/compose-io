import styled from "styled-components";

export const MetricContainer = styled.div`
  border-radius: 8px;
  background: var(--light);
  padding: 21px 24px;
  width: 30%;
  margin-bottom: 50px;
  box-shadow: 0px 12px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  .separator {
    height: 60px;
    width: 2px;
    background: #C1C7D0;
    margin: 0 20px;
  }
`;

export const Metric = styled.div`
  display: flex;
  flex-flow: row;

  .icon {
    margin-right: 11px;
  }

  .info {
    display: flex;
    flex-flow: column;
    justify-content: center;

  }

  .metric {
    display: block;
    font-size: 32px;
    line-height: 30px;
    font-family: PoppinsSemiBold;
  }

  .description {
    display: block;
    font-size: 12px;
    color: #999EA7;
  }
`;
