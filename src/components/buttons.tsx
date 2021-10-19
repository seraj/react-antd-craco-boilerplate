import { Button, Tooltip, Spin, Popconfirm, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Buttons = () => {
  function confirm(e: any) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e: any) {
    console.log(e);
    message.error("Click on No");
  }
  return (
    <>
      <Popconfirm
        title="Are you sure to to this?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary">POP CONFIRM</Button>
      </Popconfirm>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
    </>
  );
};
export default Buttons;
