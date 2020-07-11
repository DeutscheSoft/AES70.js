import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBlob } from '../OCP1/OcaBlob.js';
import { OcaEvent } from '../OCP1/OcaEvent.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Base class for event handler objects. This class applies to
 * controllers that subscribe to events and receive notifications for
 * them. Controller developers can derive from this class and add
 * specific callback methods that perform processing and/or have specific
 * event data structures.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaEventHandler
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaEventHandler = make_control_class(
  'OcaEventHandler',
  3,
  '\u0001\u0002\b',
  2,
  OcaAgent,
  [['OnEvent', 3, 1, [OcaBlob, OcaEvent], []]],
  [],
  []
);

/**
 * Generic empty callback method for events. Application developers can
 * override this method in a derived class to add behavior.
 * @method RemoteControlClasses.OcaEventHandler#OnEvent
 * @param Context {OcaBlob}
 *
 * @param eventData {OcaEventData}
 *
 * @returns {Promise}
 */
