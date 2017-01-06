const OCA = {};
const w = {
    console : console,
    OCA: OCA,
};

require("./signature_parser.js")(w);
require("./TypesBaseDatatypes.js")(w, OCA);
require("./TypesManagementDatatypes.js")(w, OCA);
require("./TypesFrameworkDatatypes.js")(w, OCA);
require("./TypesAgentDatatypes.js")(w, OCA);
require("./TypesBlockandMatrixDatatypes.js")(w, OCA);
require("./TypesEvent&SubscriptionDatatypes.js")(w, OCA);
require("./TypesWorkerDatatypes.js")(w, OCA);
require("./TypesLibraryDatatypes.js")(w, OCA);
require("./TypesNetworkDatatypes.js")(w, OCA);
require("./TypesSamplingDatatypes.js")(w, OCA);
require("./RemoteControlClasses.js")(w, OCA);
require("./OCA.js")(w, OCA);

module.exports = w;
