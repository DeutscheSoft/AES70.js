/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * States of OcaTask object. State values shall change as a result of the
 * object's having received a Command or encountering processing events (e.g.
 * completion).
 * @class OcaTaskGenericState
 */
export class OcaTaskGenericState extends Enum({
  None: 0,
  Idle: 1,
  Ready: 2,
  Running: 3,
  Ended: 4,
}) {}

/**
 * Singleton object corresponding to the entry with value ``0``.
 * @type {OcaTaskGenericState}
 * @member None
 * @memberof OcaTaskGenericState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaTaskGenericState}
 * @member Idle
 * @memberof OcaTaskGenericState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaTaskGenericState}
 * @member Ready
 * @memberof OcaTaskGenericState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``3``.
 * @type {OcaTaskGenericState}
 * @member Running
 * @memberof OcaTaskGenericState
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``4``.
 * @type {OcaTaskGenericState}
 * @member Ended
 * @memberof OcaTaskGenericState
 * @static
 */
