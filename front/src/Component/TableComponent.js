import React from "react";
import "antd/dist/antd.css";
import { Table, Button } from "antd";
import { RadioButton } from "./RadioButton";

 function TableComponent({ data }) {
  const columns = [
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
    },

    {
      key: "action",
      render: (data) => {
        console.log("data.key***", data.key);
        return (
          <div>
            <Button onClick={() => data.sendEmail(data.email)} type="primary" ghost>
              Prévenir par mail
            </Button>
            <Button
              onClick={() => data.sendSms(data.key)}
              style={{ margin: 10 }}
              type="primary"
              ghost
            >
              Prévenir par SMS
            </Button>
          </div>
        );
      },
    },
    {
      key: "action",
      render: () => {
        return <RadioButton />;
      },
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}
export default TableComponent