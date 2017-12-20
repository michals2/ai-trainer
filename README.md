# TensorFlex
## Train ML models from your browser

## Frontend

#### View Architecture

* LocaleProvider
  * Provider
    * **ConnectedRouter**
      * App
        * Switch
          * **AppHeaderContainer**
            * AppHeader
          * Home
        * ModelCreator
          * **ModelCreatorProgressContainer**
            * ModelCreatorProgress
          * Switch
            * ModelExplorer
            * **FileUploaderContainer**
              * FileUploader
            * LabelSpecifier
            * **LabelToolContainer**
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
  * modelCreator
    * modelCreatorProgress
      * step: #
      * prevButtonDisabled: bool
      * nextButtonDisabled: bool
    * fileUploader
      * files: []
    * labelTool
      * labels: []
      * activeLabelType: #
  * myModels
    * models: []
  * router
    * location
      * pathname: ""
      * search: ""
      * hash: ""
      * key: ""

## Backend

  * [AWS Deep Learning](https://aws.amazon.com/documentation/dlami/)

## Things to improve

* Routing
  - [ ] Browser history and the model creator steps can get out of sync
* Frontend
  - [ ] [upload files to browser](https://scotch.io/tutorials/use-the-html5-file-api-to-work-with-files-locally-in-the-browser)
