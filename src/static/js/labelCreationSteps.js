import FileUploaderContainer from "Containers/FileUploaderContainer";
import LabelTypeCreatorContainer from "Containers/LabelTypeCreatorContainer";
import LabelToolContainer from "Containers/LabelToolContainer";
import LabelExporter from "Components/LabelExporter";

function Step(title, id, component) {
  this.title = title;
  this.id = id;
  this.component = component;
}

export const labelCreationStepNames = [
  "Upload Files",
  "Create Labels",
  "Label Dataset",
  "Export Labels"
];

export const labelCreationSteps = [
  new Step("Upload Files", 0, FileUploaderContainer),
  new Step("Create Labels", 1, LabelTypeCreatorContainer),
  new Step("Label Dataset", 2, LabelToolContainer),
  new Step("Export Labels", 3, LabelExporter)
];

export const numberOfLabelCreationSteps = labelCreationSteps.length;
