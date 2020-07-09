import { Enum8 } from './Enum8.js';

/**
 * Enumeration that designates the type of position coordinate system
 * used. For details, see the AES70-1 description of the
 * <b>OcaPhysicalPosition </b>class.
 * @category Types
 * @class OcaPositionCoordinateSystem
 * @extends Enum8
 */
export const OcaPositionCoordinateSystem = Enum8({
  Robotic: 1,
  ItuAudioObjectBasedPolar: 2,
  ItuAudioObjectBasedCartesian: 3,
  ItuAudioSceneBasedPolar: 4,
  ItuAudioSceneBasedCartesian: 5,
  NAV: 6,
  ProprietaryBase: 128,
});
