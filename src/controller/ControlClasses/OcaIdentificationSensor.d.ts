import { Event } from '../event';
import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';

/**
 * Sensor for device identification mechanism. This sensor shall detect the
 * actuation of some kind of control -- a pushbutton, for instance -- that the
 * user depresses to signal a device identification event to the controller.
 * @extends OcaSensor
 * @class OcaIdentificationSensor
 */
export declare class OcaIdentificationSensor extends OcaSensor {
  /**
   * Event that shall be raised whenever the Device identification control is
   * activated. No event data.
   * @member OcaIdentificationSensor#OnIdentify {Event}
   */
  OnIdentify: Event;

  constructor(objectNumber: number, device: RemoteDevice);
}
