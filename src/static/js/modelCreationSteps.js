import ModelExplorer from "Components/ModelExplorer";
import FileUploader from "Components/FileUploader";
import LabelSpecifier from "Components/LabelSpecifier";
import LabelToolContainer from "Containers/LabelToolContainer";
import SplitDataset from "Components/SplitDataset";
import TrainModel from "Components/TrainModel";

function Step(title, id, component) {
  this.title = title;
  this.id = id;
  this.component = component;
}

export const modelCreationStepNames = [
  "Choose Model Type",
  "Upload Files",
  "Create Labels",
  "Label Dataset",
  "Split Dataset",
  "Train Model"
];

export const modelCreationSteps = [
  new Step("Choose Model Type", 0, ModelExplorer),
  new Step("Upload Files", 1, FileUploader),
  new Step("Create Labels", 2, LabelSpecifier),
  new Step("Label Dataset", 3, LabelToolContainer),
  new Step("Split Dataset", 4, SplitDataset),
  new Step("Train Model", 5, TrainModel)
];

export const numberOfModelCreationSteps = modelCreationSteps.length;