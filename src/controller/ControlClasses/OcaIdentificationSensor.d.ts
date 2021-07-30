import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';
import { Event } from '../event';

/**
 * Sensor for device identification mechanism. The idea of this mechanism is that there is some kind of control -- a pushbutton, for instance -- that the user depresses to send a device identification event to the controller. Such mechanisms aid in the setup of networks.
 * @extends OcaSensor
 * @class OcaIdentificationSensor
 */
export declare class OcaIdentificationSensor extends OcaSensor {
  /**
   * Event that is emitted when someone actuates the device identification control.
   * @member OcaIdentificationSensor#OnIdentify {Event}
   * Event that is emitted when someone actuates the device identification
   * control.
   */
  OnIdentify: Event;

  constructor(objectNumber: number, device: RemoteDevice);
}
