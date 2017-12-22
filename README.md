# TensorFlex
Image labeling tool for for creating object detection models

### Frontend

#### View Architecture

* LocaleProvider
  * Provider
    * ConnectedRouter **(TF-6)**
      * App
        * Switch
          * AppHeaderContainer **(TF-1)**
            * AppHeader
          * Home
        * ModelCreator
          * ModelCreatorProgressContainer **(TF-2)**
            * ModelCreatorProgress
          * Switch
            * ModelExplorer
            * FileUploaderContainer **(TF-3)**
              * FileUploader
            * LabelSpecifier
            * LabelToolContainer **(TF-4)**
              * LabelTool
                * LabelToolNavBar
                * LabelSVG
            * Split Dataset
            * TrainModel

#### Reducers Architecture

* RootReducer
  * modelCreatorReducer
    * modelCreatorProgressReducer **(TF-2)**
    * fileUploaderReducer **(TF-3)**
    * labelToolReducer **(TF-4)**
  * myModelsReducer **(TF-5)**
  * routerReducer **(TF-6)**

#### State Architecture

* State
  * modelCreator
    * modelCreatorProgress **(TF-1) (TF-2)**
      * step: #
      * prevButtonDisabled: bool
      * nextButtonDisabled: bool
    * fileUploader **(TF-3)**
      * files: []
    * labelTool **(TF-4)**
      * labels: []
      * activeLabelType: #
  * myModels **(TF-5)**
    * models: []
  * router **(TF-6)**
    * location
      * pathname: ""
      * search: ""
      * hash: ""
      * key: ""

### Backend

  * [AWS Deep Learning](https://aws.amazon.com/documentation/dlami/)

### Things to improve

* Routing
  - [ ] Browser history and the model creator steps can get out of sync
* Frontend
  - [X] [upload files to browser](https://scotch.io/tutorials/use-the-html5-file-api-to-work-with-files-locally-in-the-browser)
