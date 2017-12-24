// import ModelExplorer from "Components/ModelExplorer";
import FileUploaderContainer from "Containers/FileUploaderContainer";
import LabelTypeCreator from "Components/LabelTypeCreator";
import LabelToolContainer from "Containers/LabelToolContainer";
// import SplitDataset from "Components/SplitDataset";
// import TrainModel from "Components/TrainModel";

function Step(title, id, component) {
  this.title = title;
  this.id = id;
  this.component = component;
}

export const labelCreationStepNames = [
  // "Choose Model Type",
  "Upload Files",
  "Create Labels",
  "Label Dataset"
  // "Split Dataset",
  // "Train Model"
];

export const labelCreationSteps = [
  // new Step("Choose Model Type", 0, ModelExplorer),
  new Step("Upload Files", 0, FileUploaderContainer),
  new Step("Create Labels", 1, LabelTypeCreator),
  new Step("Label Dataset", 2, LabelToolContainer)
  // new Step("Split Dataset", 4, SplitDataset),
  // new Step("Train Model", 5, TrainModel)
];

export const numberOfLabelCreationSteps = labelCreationSteps.length;
