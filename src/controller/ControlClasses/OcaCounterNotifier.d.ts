import {
  IOcaCounterNotifierFilterParameters,
  OcaCounterNotifierFilterParameters,
} from '../../types/OcaCounterNotifierFilterParameters';
import { OcaCounterUpdate } from '../../types/OcaCounterUpdate';
import { Event } from '../event';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * **Notifier** for an OCA counter. Observes the value of the counter and emits
 * a **CounterUpdate** notification when specified criteria are met. An OCA
 * counter wishing to notify controllers of its changing value can designate one
 * or more notifier objects to which the controllers may subscribe. See the
 * definition of the **OcaCounter** datatype for additional detail. Notification
 * criteria are as follows:
 *
 *  - **Threshold**. The counter value meets a certain comparison condition. A
 *    selection of comparison operators is available. The **Operator** property
 *    is the comparison operator to use for **Threshold.**
 *
 *  - **Period**. The value of the** Period** parameter, if nonzero, is a the
 *    time interval for the recurrent timed emission of **CounterUpdate**
 *    events. Such events are emitted regardless of the counter's value.
 *
 *  - **CountIncrement.** An **CounterUpdate** event is emitted every time the
 *    counter value changes by an amount equal to or greater than the value of
 *    this parameter.
 *
 *
 * ** **For combinations of (1), (2), and (3), the criteria are applied as
 * follows: if (1) is specified and not satisfied, then no observation is
 * emitted. else if (2) is specified and satisfied or (3) is specified and
 * satisfied, then an observation is emitted. end end Regardless of filter
 * parameter values, a notification is always emitted when a counter is
 * explicitly reset using a **Reset()** method. An **OcaCounterNotifier**
 * instance and the counter it observes are bound at the time the
 * **OcaCounterNotifier** instance is constructed. For static devices,
 * construction will occur during manufacture, or possibly during a subsequent
 * hardware configuration step. For reconfigurable devices, construction might
 * be done by online controllers as part of device configuration activity.
 * @extends OcaAgent
 * @class OcaCounterNotifier
 */
export declare class OcaCounterNotifier extends OcaAgent {
  /**
   * Event raised when filter conditions are met.
   * @member OcaCounterNotifier#OnCounterUpdate {Event}
   */
  OnCounterUpdate: Event;
  /**
   * This event is emitted whenever FilterParameters changes.
   */
  OnFilterParametersChanged: PropertyEvent<OcaCounterNotifierFilterParameters>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Returns the payload of the most recent **CounterUpdate** event emitted by
   * this object.
   *
   * @method OcaCounterNotifier#GetLastUpdate
   * @returns {Promise<OcaCounterUpdate[]>}
   *   A promise which resolves to a single value of type :class:`OcaCounterUpdate[]`.
   */
  GetLastUpdate(): Promise<OcaCounterUpdate[]>;

  /**
   * Returns this notifier's set of filter parameters.
   *
   * @method OcaCounterNotifier#GetFilterParameters
   * @returns {Promise<OcaCounterNotifierFilterParameters>}
   *   A promise which resolves to a single value of type :class:`OcaCounterNotifierFilterParameters`.
   */
  GetFilterParameters(): Promise<OcaCounterNotifierFilterParameters>;

  /**
   * Sets this notifier's set of filter parameters.
   *
   * @method OcaCounterNotifier#SetFilterParameters
   * @param {IOcaCounterNotifierFilterParameters} Parameters
   *
   * @returns {Promise<void>}
   */
  SetFilterParameters(
    Parameters: IOcaCounterNotifierFilterParameters
  ): Promise<void>;
}
