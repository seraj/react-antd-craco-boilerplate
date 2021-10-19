import { Spin, Steps, Divider } from "antd";
import Buttons from "./buttons";
import { StyledContainer } from "./styled";
const { Step } = Steps;

const AntComponents = () => {
  return (
    <StyledContainer>
      <Buttons />
      <Divider />
      <Spin />
      <Divider />
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </StyledContainer>
  );
};

export default AntComponents;
