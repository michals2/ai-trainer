// myModelsReducer
export const myModels = {
  models: []
};

// modelCreatorProgressReducer
export const labelCreatorProgress = {
  step: 0,
  prevButtonDisabled: true,
  nextButtonDisabled: false
};

// modelCreatorLabelToolReducer
export const labelTool = {
  labelTypes: [
    {
      id: 1,
      name: "Human",
      shape: "Rectangle",
      color: "red"
    },
    {
      id: 2,
      name: "Raccoon",
      shape: "Circle",
      color: "blue"
    },
    {
      id: 3,
      name: "Dog",
      shape: "Rectangle",
      color: "green"
    }
  ],
  labels: [
    {
      id: 1,
      labelTypeId: 2,
      dims: {
        cx: 100,
        cy: 200,
        r: 25
      }
    },
    {
      id: 2,
      labelTypeId: 1,
      dims: {
        x: 300,
        y: 200,
        height: 200,
        width: 33
      }
    }
  ],
  activeLabelId: 1,
  activeLabelTypeId: 1,
  nextLabelId: 3
};

// fileUploaderReducer
export const fileUploader = {
  files: []
};
