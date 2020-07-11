/*
 * This file has been generated.
 */

/**
 * Multifield descriptor that defines a delay value element.
 */
export class OcaDelayValue {
  constructor(DelayValue, DelayUnit) {
    /**
     * The delay value.
     * @member RemoteControlClasses.OcaDelayValue#OnDelayValueChanged {PropertyEvent<float>} - This event is emitted when DelayValue changes in the remote object.
     */
    this.DelayValue = DelayValue;
    /**
     * The unit of the delay value.
     * @member RemoteControlClasses.OcaDelayValue#OnDelayUnitChanged {PropertyEvent<OcaDelayUnit>} - This event is emitted when DelayUnit changes in the remote object.
     */
    this.DelayUnit = DelayUnit;
  }
}
