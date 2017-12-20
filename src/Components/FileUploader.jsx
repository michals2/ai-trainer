// React imports
import React, { Component } from "react";

class FileUploader extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  handleChange = e => {
    const files = [...this.refs.input.files];
    console.log(this.refs.input, { files });

    var reader = new FileReader();
    reader.onload = event => {
      const url = event.target.result;
      console.log({ url });
      this.setState({ images: [...this.state.images, url] });
    };

    reader.readAsDataURL(files[0]);
  };

  render() {
    return (
      <div>
        <input
          multiple
          id="the-file-input"
          type="file"
          ref="input"
          onChange={this.handleChange}
        />
        {this.state.images.map((image, i) =>
          <img width={100} key={i} src={image} />
        )}
      </div>
    );
  }
}

export default FileUploader;

/*
// render the image in our view
function renderImage(file) {
  
    // generate a new FileReader object
    var reader = new FileReader();
  
    // inject an image with the src url
    reader.onload = function(event) {
      the_url = event.target.result
      $('#some_container_div').html("<img src='" + the_url + "' />")
    }
  
    // when the file is read it triggers the onload event above.
    reader.readAsDataURL(file);
  }
  
  // handle input changes
  $("#the-file-input").change(function() {
      console.log(this.files)
  
      // grab the first image in the FileList object and pass it to the function
      renderImage(this.files[0])
  });
  */
