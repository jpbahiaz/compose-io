import React from "react";
import { house } from "../../../assets/svgs/house";
import { percentage } from "../../../assets/svgs/percentage";
import { plus } from "../../../assets/svgs/plus";
import { ticket } from "../../../assets/svgs/ticket";
import { userPlus } from "../../../assets/svgs/user_plus";
import { userUser } from "../../../assets/svgs/user_user";
import { Metric, MetricContainer } from "./NumericMetricStyles";

const Icons = {
  house: house,
  ticket: ticket,
  percentage: percentage,
  plus: plus,
  user_plus: userPlus,
  user_user: userUser,
};

type Props = {
  metric1: number;
  desc1: string;
  metric2: number;
  desc2: string;
  icon1: keyof typeof Icons;
  icon2: keyof typeof Icons;
};

export function NumericMetric({
  metric1,
  metric2,
  desc1,
  desc2,
  icon1,
  icon2,
}: Props) {
  return (
    <MetricContainer>
      <Metric>
        <div className="icon">{Icons[icon1]}</div>
        <div className="info">
          <div className="metric">{metric1}</div>
          <div className="description">{desc1}</div>
        </div>
      </Metric>
      <div className="separator" />
      <Metric>
        <div className="icon">{Icons[icon2]}</div>
        <div className="info">
          <div className="metric">{metric2}</div>
          <div className="description">{desc2}</div>
        </div>
      </Metric>
    </MetricContainer>
  );
}
