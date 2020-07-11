/*
 * This file has been generated.
 */

/**
 * Class that defines the event data parameter for the <b>StatusChange
 * </b>event defined in <b>OcaGrouper</b>.
 */
export class OcaGrouperStatusChangeEventData {
  constructor(Event, groupIndex, citizenIndex, changeType) {
    /**
     * The event that was raised.
     * @member RemoteControlClasses.OcaGrouperStatusChangeEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * Index of relevant group, or zero if event is non-group-specific.
     * @member RemoteControlClasses.OcaGrouperStatusChangeEventData#OngroupIndexChanged {PropertyEvent<int>} - This event is emitted when groupIndex changes in the remote object.
     */
    this.groupIndex = groupIndex;
    /**
     * Index of citizen within given grouper, or zero if event is
     * non-citizen-specific.
     * @member RemoteControlClasses.OcaGrouperStatusChangeEventData#OncitizenIndexChanged {PropertyEvent<int>} - This event is emitted when citizenIndex changes in the remote object.
     */
    this.citizenIndex = citizenIndex;
    /**
     * Type of change.
     * @member RemoteControlClasses.OcaGrouperStatusChangeEventData#OnchangeTypeChanged {PropertyEvent<OcaGrouperStatusChangeType>} - This event is emitted when changeType changes in the remote object.
     */
    this.changeType = changeType;
  }
}
