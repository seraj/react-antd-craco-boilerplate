import { Layout } from "antd";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  height: 100vh;
  .ant-layout {
    background: ${({ theme }) => theme.body};
  }
`;
export { StyledLayout };
