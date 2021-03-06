import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "antd/dist/antd.css";
import { Form, Input, Tooltip, Layout, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useAuthContexts } from "../hooks/context";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const { register, user } = useAuthContexts();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);

    await register(values);
  };

  if (user) return <Redirect to="/" />;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Link to="/">Home</Link>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["Paris", "Lyon", "Marseille"],
          prefix: "86",
        }}
        scrollToFirstError
        style={{
          margin: "100px",
          marginRight: "300px",
          display: "block",
        }}
      >
        <Form.Item
          name="firstName"
          label={
            <span>
              Nom&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label={
            <span>
              Prénom&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your prénom!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            /*addonBefore={prefixSelector}*/
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        {/*<Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        */}

        <Form.Item
          {...tailFormItemLayout}
          style={{
            display: "flex",
            alignItems: "center",
            justifycontent: "center",
          }}
        >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default RegistrationForm;
