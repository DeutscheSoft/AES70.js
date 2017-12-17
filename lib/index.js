const OCA = {};
const string_decoder = require('string_decoder');
const w = {
    console : console,
    OCA: OCA,
    StringDecoder: string_decoder.StringDecoder,
};

require("./signature_parser.js")(w);
require("./Types.js")(w, OCA);
require("./RemoteControlClasses.js")(w, OCA);
require("./OCA.js")(w, OCA);

module.exports = w;
