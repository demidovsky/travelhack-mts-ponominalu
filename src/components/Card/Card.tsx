import styled from "styled-components";
import { textOverflow } from "../../utils/util";

export const Card = styled.div`
  width: 100%;
  min-height: 367px;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const CardHeadBlock = styled.div``;
export const CardHead = styled.div`
  background: url("./logo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 168px;
  position: relative;
  overflow: hidden;
`;
export const CardHeadTitle = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  max-width: 260px;
  background-color: #000;
  padding: 3px 10px;
  color: #fff;
  ${textOverflow}
`;
export const CardTitle = styled.h2`
  font-size: 24px;
  margin: 14px 20px;
  font-weight: bold;
  max-height: 84px;
  overflow: hidden;
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const CardFooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardFooterText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
export const CardPrice = styled.div`
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 2px;
  white-space: nowrap;
  background-color: #e32626;
  color: #fff;
  font-weight: bold;
`;
