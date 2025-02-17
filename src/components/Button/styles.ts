import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles";
import { Props } from ".";

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.size === "big" ? colors.lightYellow : colors.orange};
  color: ${(props) =>
    props.size === "big" ? colors.orange : colors.lightYellow};
  font-size: 14px;
  font-weight: 700;
  padding: ${(props) => (props.size === "big" ? "4px 84px" : "4px 6px")};
`;

export const ButtonLink = styled(Link)<Props>`
  background-color: ${(props) =>
    props.size === "big" ? colors.lightYellow : colors.orange};
  color: ${(props) =>
    props.size === "big" ? colors.orange : colors.lightYellow};
  font-size: 14px;
  font-weight: 700;
  padding: ${(props) => (props.size === "big" ? "4px 84px" : "4px 6px")};
  text-decoration: none;
`;
