/**
 * {
 *  value: "",
 *  label: "",
 *  children: []
 * }
 */

export default [
  {
    value: "objectDetection",
    label: "Object Detection",
    children: [
      {
        value: "model1",
        label: "Model 1"
      },
      {
        value: "model2",
        label: "Model 2",
        children: [
          {
            value: "model3",
            label: "Model 3"
          }
        ]
      }
    ]
  },
  {
    value: "naturalLanguage",
    label: "Natural Language Processing",
    children: [
      {
        value: "model4",
        label: "Model 4"
      }
    ]
  }
];
