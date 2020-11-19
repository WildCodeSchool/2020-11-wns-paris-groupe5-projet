import React from "react";
import { Checkbox } from 'antd';
import { Button } from 'antd';

import { Table, Divider } from 'antd';

const { Column } = Table;


function Student(props) {
    console.log(props)
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    console.log(props.data)

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