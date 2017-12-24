import React from "react";

const sectionStyle = { padding: 20 };

const Home = () =>
  <div>
    <div style={sectionStyle}>
      TensorFlex is a tool to make labeling images for machine learning purposes
      dead simple. Check out the label images tab to play around with the tool.
    </div>
    <div style={sectionStyle}>
      I built TensorFlex because I didn't see many image labeling tools that had
      all of the features that I wanted.
    </div>
    <div style={sectionStyle}>
      I see this tool expanding in features in the future and possibly growing
      to include model training in the browser.
    </div>
    <div style={sectionStyle}>
      If you're interested in contributing to the project, check out the
      <a href="https://github.com/michals2/tensorflex"> github</a> or reach out
      to me directly at
      <a href="mailto:luke.michals@gmail.com"> luke.michals@gmail.com</a>
    </div>
  </div>;

export default Home;
