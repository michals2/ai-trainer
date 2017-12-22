// React imports
import React from "react";
import { Form, Input, Row, Col } from "antd";
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const handleSubmit = e => {
  e.preventDefault();
  console.log({ e });
};

const LabelSpecifier = () => {
  return (
    <div>
      <Row type="flex" justify="space-between" span={24}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormItem {...formItemLayout} label="E-mail" required>
              <Input />
            </FormItem>
            <FormItem {...formItemLayout} label="Password" required>
              <Input type="password" />
            </FormItem>
          </Form>
        </Col>
        <Col>col-10</Col>
      </Row>
    </div>
  );
};

export default LabelSpecifier;
