/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! Select time mode of OcaRamper agent.
 */
OCA.OcaGrouperMode = SP.enum({
    MasterSlave: 1,
    PeerToPeer: 2,
});


/*!
 *! Interpolation law for ramper to use.
 */
OCA.OcaRamperInterpolationLaw = SP.enum({
    Linear: 1,
    ReverseLinear: 2,
    Sine: 3,
    Exponential: 4,
});


/*!
 *! Select time mode of OcaRamper agent.
 */
OCA.OcaRamperTimeMode = SP.enum({
    Absolute: 1,
    Relative: 2,
});


/*!
 *! Command repertoire of OcaRamper's <b>Control </b>method.
 */
OCA.OcaRamperRunCommand = SP.enum({
    Enable: 1,
    Start: 2,
    Halt: 3,
});


/*!
 *! States of the ramper. Here are the rules for ramper state change: <ul>
 *! <li>A freshly-constructed ramper's state is <b>NotInitialized</b>.
 *! </li> </ul> <ul> <li>A ramper becomes <b>Initialized</b> when : The
 *! ramper is <b>NotInitialized</b>; AND <b> TargetProperty</b> has been
 *! set to a valid value; AND <b> Goal</b> has been set; AND <b>
 *! Duration</b> has been set. </li> </ul> <ul> <li>A ramper becomes
 *! <b>Scheduled</b> when It is <b>Initialized</b>; AND
 *! <b>T</b><b><sub>start</sub></b> and <b>TimeMode</b> have been set; AND
 *! (T<sub>start</sub> + <b>Duration</b>) is in the future. </li> </ul>
 *! <ul> <li>A ramper becomes <b>Enabled</b> when it is <b>Scheduled</b>
 *! AND receives an <i>Enable </i>command. </li> </ul> <ul> <li>A ramper
 *! becomes <b>Ramping</b> when: It is <b>Enabled</b> and the ramp start
 *! time is reached; OR It is <b>Initialized</b>, <b>Scheduled</b>, or
 *! <b>Enabled</b> and a <i>Start</i> command is received. </li> </ul>
 *! <ul> <li>Completion of a ramp or Receipt of a <i>Halt</i> command
 *! causes the state to become: <b>Scheduled</b>, if T<sub>start</sub>,
 *! Time Mode have been set; AND (T<sub>start</sub> + Duration) is in the
 *! future. Otherwise, <b>Initialized.</b></li> </ul>
 */
OCA.OcaRamperState = SP.enum({
    NotInitialized: 1,
    Iniitialized: 2,
    Scheduled: 3,
    Enabled: 4,
    Ramping: 5,
});


/*!
 *! Interpolation law for ramper to use.
 */
OCA.OcaObserverState = SP.enum({
    NotTriggered: 0,
    Triggered: 1,
});


/*!
 *! Enumeration of relational operators that can be used in OCA classes.
 */
OCA.OcaRelationalOperator = SP.enum({
    None: 0,
    Equality: 1,
    Inequality: 2,
    GreaterThan: 3,
    GreaterThanOrEqual: 4,
    LessThan: 5,
    LessThanOrEqual: 6,
});


/*!
 *! Type of power supply.
 */
OCA.OcaPowerSupplyType = SP.enum({
    None: 0,
    Mains: 1,
    Battery: 2,
    Phantom: 3,
    Solar: 4,
});


/*!
 *! Physical location of a device power supply.
 */
OCA.OcaPowerSupplyLocation = SP.enum({
    Unspecified: 1,
    Internal: 2,
    External: 3,
});


/*!
 *! Status of a device power supply.
 */
OCA.OcaPowerSupplyState = SP.enum({
    Off: 1,
    Unavailable: 2,
    Available: 3,
    Active: 4,
});


/*!
 *! Describes a group in a grouper.
 */
OCA.OcaGrouperGroup = function(Index, Name, ProxyONo) {
    this.Index = Index;
    this.Name = Name;
    this.ProxyONo = ProxyONo;
};
OCA.OcaGrouperGroup.prototype = {
    signature: new SP.signature(SP.UINT16, SP.STRING, SP.UINT32),
    _values : function() {
        return [ this.Index, this.Name, this.ProxyONo ];
    },
};

/*!
 *! Describes a citizen of a grouper. Refers to a specific worker object
 *! somewhere in the media network.
 */
OCA.OcaGrouperCitizen = function(Index, ObjectPath, Online) {
    this.Index = Index;
    this.ObjectPath = ObjectPath;
    this.Online = Online;
};
OCA.OcaGrouperCitizen.prototype = {
    signature: new SP.signature(SP.UINT16, OCA.OcaOPath, SP.BOOLEAN),
    _values : function() {
        return [ this.Index, this.ObjectPath, this.Online ];
    },
};

/*!
 *! Describes the enrollment of a citizen into a group.
 */
OCA.OcaGrouperEnrollment = function(GroupIndex, CitizenIndex) {
    this.GroupIndex = GroupIndex;
    this.CitizenIndex = CitizenIndex;
};
OCA.OcaGrouperEnrollment.prototype = {
    signature: new SP.signature(SP.UINT16, SP.UINT16),
    _values : function() {
        return [ this.GroupIndex, this.CitizenIndex ];
    },
};


};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
