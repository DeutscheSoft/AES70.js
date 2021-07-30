import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

import { IOcaEvent } from '../../types/OcaEvent';

/**
 * Base class for event handler objects. This class applies to controllers that subscribe to events and receive notifications for them. Controller developers can derive from this class and add specific callback methods that perform processing and/or have specific event data structures.
 * @extends OcaAgent
 * @class OcaEventHandler
 */
export declare class OcaEventHandler extends OcaAgent {
  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Generic empty callback method for events. Application developers can override this method in a derived class to add behavior.
   *
   * @method OcaEventHandler#OnEvent
   * @param {Uint8Array} Context
   *
   * @param {OcaEvent} eventData
   *
   * @returns {Promise<void>}
   */
  OnEvent(Context: Uint8Array, eventData: IOcaEvent): Promise<void>;
}
