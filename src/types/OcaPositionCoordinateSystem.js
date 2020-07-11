/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enumeration that designates the type of position coordinate system
 * used. For details, see the AES70-1 description of the
 * <b>OcaPhysicalPosition </b>class.
 */
export class OcaPositionCoordinateSystem extends Enum({
  Robotic: 1,
  ItuAudioObjectBasedPolar: 2,
  ItuAudioObjectBasedCartesian: 3,
  ItuAudioSceneBasedPolar: 4,
  ItuAudioSceneBasedCartesian: 5,
  NAV: 6,
  ProprietaryBase: 128,
}) {}
