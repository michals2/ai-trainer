import stockImage from "static/images/raccoon-1.jpg";

export const myModels = {
  models: []
};

export const labelCreatorProgress = {
  step: 0,
  prevButtonDisabled: true,
  nextButtonDisabled: false
};

export const labels = {
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
  nextAvailabelLabelId: 3
};

export const labelTypes = {
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
  activeLabelTypeId: 1,
  nextAvailableLabelTypeId: 4
};

export const fileUploader = {
  files: [
    {
      fileName: "raccoon stock image",
      url: stockImage,
      dims: {
        width: "650",
        height: "417"
      }
    }
  ]
};
