/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(OCA) {
/*!
 *! Lock states of media clocks.
 */
OCA.OcaMediaClockLockState = SP.enum({
    Undefined: 0,
    Locked: 1,
    Synchronizing: 2,
    FreeRun: 3,
    Stopped: 4,
});


/*!
 *! Types of media clocks.
 */
OCA.OcaMediaClockType = SP.enum({
    None: 0,
    Internal: 1,
    Network: 2,
    External: 3,
});


/*!
 *! Media clock nominal rate and associated parameters.
 */
OCA.OcaMediaClockRate = function(NominalRate, PullRange, Accuracy, JitterMax) {
    this.NominalRate = NominalRate;
    this.PullRange = PullRange;
    this.Accuracy = Accuracy;
    this.JitterMax = JitterMax;
};
OCA.OcaMediaClockRate.prototype = {
    signature: new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.FLOAT32, SP.FLOAT32),
    _values : function() {
        return [ this.NominalRate, this.PullRange, this.Accuracy, this.JitterMax ];
    },
};

})(this.OCA || (this.OCA = {}));
