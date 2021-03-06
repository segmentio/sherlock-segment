
/**
 * Amplitude.
 */

exports.name = 'Amplitude';

exports.script = /(api\.amplitude\.com|d24n15hnbwhuhn\.cloudfront\.net)/;

exports.settings = function () {
  var apiKey = window.amplitude.options.apiKey;
  if (!apiKey) return false;

  return { apiKey: apiKey };
};
