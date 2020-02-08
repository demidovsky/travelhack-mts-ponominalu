import { css } from "styled-components";

export const textOverflow = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const getDateFromIso = (date: Date) => {
  return date.toISOString().split("T")[0];
};
