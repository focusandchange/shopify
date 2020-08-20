import { FC } from "react";
import React from "react";
import styled from "styled-components";

const SelectBigWrapper = styled.div`
  float: left;

  box-sizing: border-box;
  width: 100%;
  padding: 0.4285714286em;

  word-wrap: break-word;
  word-break: break-word;

  color: #545454;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  font-size: 14px;
  line-height: 1.3em;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-box-direction: normal;
`;
export const Button: FC = () => {
  return <SelectBigWrapper></SelectBigWrapper>;
};
