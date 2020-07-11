/*
 * This file has been generated.
 */

/**
 * Describes a citizen of a grouper. Refers to a specific worker object
 * somewhere in the media network.
 */
export class OcaGrouperCitizen {
  constructor(Index, ObjectPath, Online) {
    /**
     * Index of citizen in Grouper
     * @member RemoteControlClasses.OcaGrouperCitizen#OnIndexChanged {PropertyEvent<int>} - This event is emitted when Index changes in the remote object.
     */
    this.Index = Index;
    /**
     * Object path (= hostname + object number) of the worker object that is
     * the citizen of the grouper.
     * @member RemoteControlClasses.OcaGrouperCitizen#OnObjectPathChanged {PropertyEvent<OcaOPath>} - This event is emitted when ObjectPath changes in the remote object.
     */
    this.ObjectPath = ObjectPath;
    /**
     * True iff connection from grouper to citizen is healthy.
     * @member RemoteControlClasses.OcaGrouperCitizen#OnOnlineChanged {PropertyEvent<int>} - This event is emitted when Online changes in the remote object.
     */
    this.Online = Online;
  }
}
