import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";

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
const labelShapeOptions = ["Point", "Rectangle", "Circle", "Polygon"];

class LabelTypeCreatorForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, vals) => {
      if (!err) {
        console.log({ vals });
        const { name, shape, color } = vals;
        this.props.actions.addLabelType(name, shape, color);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Label Name" hasFeedback>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Label name is required"
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Label Shape" hasFeedback>
          {getFieldDecorator("shape", {
            rules: [
              {
                required: true,
                message: "Label shape is required"
              }
            ]
          })(
            <Select>
              {labelShapeOptions.map((labelShapeOption, i) =>
                <Option value={labelShapeOption} key={i}>
                  {labelShapeOption}
                </Option>
              )}
            </Select>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Label Color" hasFeedback>
          {getFieldDecorator("color", {
            rules: []
          })(<Input />)}
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
    );
  }
}

const WrappedLabelTypeCreatorForm = Form.create()(LabelTypeCreatorForm);
export default WrappedLabelTypeCreatorForm;
