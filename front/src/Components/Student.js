import React from "react";
import { Button } from 'antd';
import { Table } from 'antd';

const { Column } = Table;

function Student(props) {

  return (
    <div>
    <Table dataSource={props.data}>
      <Column
        title="Prénom"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title="Nom"
        dataIndex="lastName"
        key="lastName"
      />
    <Column
      title="Action"
      key="action"
      render={(text, record) => {
        console.log("record.email", record.email)
        return (
          <Button onClick={ () => props.sendEmail(record.email) } type="primary">Envoyer un message à {record.firstName}</Button>
      )}}
    />
  </Table>
  </div>
  );
}

export default Student;