// React imports
import React from "react";
import { Form, Input, Row, Col, Select, Button } from "antd";

import LabelTable from "Components/LabelTable";

const Option = Select.Option;
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

const labelShapeOptions = ["Point", "Rectangle", "Circle", "Polygon"];

const LabelSpecifier = () => {
  return (
    <div>
      <Row type="flex" justify="space-between" span={24}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormItem {...formItemLayout} label="Label Name" required>
              <Input />
            </FormItem>
            <FormItem {...formItemLayout} label="Label Shape" required>
              <Select>
                {labelShapeOptions.map((labelShapeOption, i) =>
                  <Option value={labelShapeOption} key={i}>
                    {labelShapeOption}
                  </Option>
                )}
              </Select>
            </FormItem>
            <FormItem {...formItemLayout} label="Shortcut">
              <Input />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                // disabled={hasErrors(getFieldsError())}
              >
                Add Label
              </Button>
            </FormItem>
          </Form>
        </Col>
        <Col>
          <LabelTable />
        </Col>
      </Row>
    </div>
  );
};

export default LabelSpecifier;
