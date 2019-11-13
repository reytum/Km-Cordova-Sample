cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "kommunicate-cordova-plugin.kommunicate",
      "file": "plugins/kommunicate-cordova-plugin/www/kommunicate.js",
      "pluginId": "kommunicate-cordova-plugin",
      "clobbers": [
        "kommunicate"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-cocoapod-support": "1.6.2",
    "kommunicate-cordova-plugin": "0.4.16",
    "cordova-plugin-whitelist": "1.3.4"
  };
});