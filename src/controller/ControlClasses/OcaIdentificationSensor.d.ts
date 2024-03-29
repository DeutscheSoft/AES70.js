import { Event } from '../event';
import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';

/**
 * Sensor for device identification mechanism. The idea of this mechanism is
 * that there is some kind of control -- a pushbutton, for instance -- that the
 * user depresses to send a device identification event to the controller. Such
 * mechanisms aid in the setup of networks.
 * @extends OcaSensor
 * @class OcaIdentificationSensor
 */
export declare class OcaIdentificationSensor extends OcaSensor {
  /**
   * Event that is emitted when someone actuates the device identification
   * control.
   * @member OcaIdentificationSensor#OnIdentify {Event}
   */
  OnIdentify: Event;

  constructor(objectNumber: number, device: RemoteDevice);
}
