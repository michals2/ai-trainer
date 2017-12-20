const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  ); // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" }
  })(config, env);
  return config;
};
