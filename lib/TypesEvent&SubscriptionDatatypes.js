/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! Enum describing property change type.
 */
OCA.OcaPropertyChangeType = SP.enum({
    CurrentChanged: 1,
    MinChanged: 2,
    MaxChanged: 3,
    ItemAdded: 4,
    ItemChanged: 5,
    ItemDeleted: 6,
});


/*!
 *! Enum describing status change types, as used in <b>OcaGrouper's
 *! StatusChange </b>event.
 */
OCA.OcaGrouperStatusChangeType = SP.enum({
    citizenAdded: 1,
    citizenDeleted: 2,
    citizenConnectionLost: 3,
    citizenConnectionReEstablished: 4,
    citizenError: 5,
    enrollment: 6,
    unEnrollment: 7,
});


/*!
 *! Enum for subscriptions that specifies whether its notification
 *! messages are to be delivered by reliable means (e.g. TCP) or fast
 *! means (e.g. UDP).
 */
OCA.OcaNotificationDeliveryMode = SP.enum({
    Reliable: 1,
    Fast: 2,
});


/*!
 *! Enum describing <b>OcaSubscriptionManager</b> states.
 */
OCA.OcaSubscriptionManagerState = SP.enum({
    Normal: 1,
    EventsDisabled: 2,
});


/*!
 *! Representation of an OCA event, i.e. the unique combination of emitter
 *! ONo and the EventID.
 */
OCA.OcaEvent = function(EmitterONo, EventID) {
    this.EmitterONo = EmitterONo;
    this.EventID = EventID;
};
OCA.OcaEvent.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaEventID),
    _values : function() {
        return [ this.EmitterONo, this.EventID ];
    },
};

/*!
 *! Representation of an OCA method, i.e. the unique combination of an ONo
 *! and a MethodID.
 */
OCA.OcaMethod = function(ONo, MethodID) {
    this.ONo = ONo;
    this.MethodID = MethodID;
};
OCA.OcaMethod.prototype = {
    signature: new SP.signature(SP.UINT32, OCA.OcaMethodID),
    _values : function() {
        return [ this.ONo, this.MethodID ];
    },
};

/*!
 *! Base class for classes containing event data. This base class holds
 *! the event data that every event must pass. If an event has additional
 *! parameters they must be added in derived classes, and the derived
 *! classes must take care of marshaling and unmarshaling the additional
 *! data.
 */
OCA.OcaEventData = function(Event) {
    this.Event = Event;
};
OCA.OcaEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent),
    _values : function() {
        return [ this.Event ];
    },
};

/*!
 *! Event data for events returning object lists, for example the
 *! <b>SynchronizeState</b> event defined in
 *! <b>OcaSubscriptionManager.</b>
 */
OCA.OcaObjectListEventData = function(Event, objectList) {
    this.Event = Event;
    this.objectList = objectList;
};
OCA.OcaObjectListEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.LIST(SP.UINT32)),
    _values : function() {
        return [ this.Event, this.objectList ];
    },
};

/*
class OcaPropertyChangedEventData<DataType>(OcaPropertyID PropertyID, T PropertyValue, OcaPropertyChangeType ChangeType, T PropertyKey) {
    constant signature = ({ OCA.OcaPropertyID, OCA.T, OCA.OcaPropertyChangeType, OCA.T});
    array _values() {
        return ({ PropertyID, PropertyValue, ChangeType, PropertyKey });
    }
}
*/

/*!
 *! Event data for event OcaNumericObserver.Observation
 */
OCA.OcaObservationEventData = function(Event, Reading) {
    this.Event = Event;
    this.Reading = Reading;
};
OCA.OcaObservationEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.FLOAT64),
    _values : function() {
        return [ this.Event, this.Reading ];
    },
};


/*!
 *! Event data for event OcaNumericObserver.Observation
 */
OCA.OcaObservationListEventData = function(Event, Reading) {
    this.Event = Event;
    this.Reading = Reading;
};
OCA.OcaObservationListEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.LIST(SP.FLOAT64)),
    _values : function() {
        return [ this.Event, this.Reading ];
    },
};

/*!
 *! Class that defines the event data parameter for the <b>StatusChange
 *! </b>event defined in <b>OcaGrouper</b>.
 */
OCA.OcaGrouperStatusChangeEventData = function(Event, groupIndex, citizenIndex, changeType) {
    this.Event = Event;
    this.groupIndex = groupIndex;
    this.citizenIndex = citizenIndex;
    this.changeType = changeType;
};
OCA.OcaGrouperStatusChangeEventData.prototype = {
    signature: new SP.signature(OCA.OcaEvent, SP.UINT16, SP.UINT16, OCA.OcaGrouperStatusChangeType),
    _values : function() {
        return [ this.Event, this.groupIndex, this.citizenIndex, this.changeType ];
    },
};

};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
