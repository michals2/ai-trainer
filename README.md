# TensorFlex
Image labeling tool for for creating object detection models

### Frontend

#### View Architecture

* LocaleProvider
  * Provider
    * ConnectedRouter
      * App
        * Switch
          * AppHeaderContainer
            * AppHeader
          * Home
        * ModelCreator
          * ModelCreatorProgressContainer
            * ModelCreatorProgress
          * Switch
            * ModelExplorer
            * FileUploaderContainer
              * FileUploader
            * LabelSpecifier
            * LabelToolContainer
              * LabelTool
                * LabelToolNavBar
                * LabelSVG
            * Split Dataset
            * TrainModel

#### Reducers Architecture

* RootReducer
  * modelCreatorReducer
    * modelCreatorProgressReducer
    * fileUploaderReducer
    * labelToolReducer
  * myModelsReducer
  * routerReducer

#### State Architecture

* State
  * labelCreator
    * labelCreatorProgress
      * step: #
      * prevButtonDisabled: bool
      * nextButtonDisabled: bool
    * fileUploader
      * files: []
    * labels
      * labels: []
      * activeLabelId: #
      * nextAvailableLabelId: #
    * labelTypes
      * labelTypes: []
      * activeLabelTypeId: #
      * nextAvailableLabelTypeId: #
  * router
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
  - [ ] Check the uploaded files to ensure they are readable image types
  - [ ] Add ability to add labels to images
  - [ ] Add ability to create new labels
  - [ ] Add login and saving of images/labels/user credentials
