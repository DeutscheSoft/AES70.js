/*
 * @namespace RemoteControlClasses
 * This namespace contains all control classes generated from the AES70
 * standards document. It currently contains all classes defined in
 * AES70-2018.
 */

import { OcaRoot } from './ControlClasses/OcaRoot.js';
import { OcaWorker } from './ControlClasses/OcaWorker.js';
import { OcaActuator } from './ControlClasses/OcaActuator.js';
import { OcaMute } from './ControlClasses/OcaMute.js';
import { OcaPolarity } from './ControlClasses/OcaPolarity.js';
import { OcaSwitch } from './ControlClasses/OcaSwitch.js';
import { OcaGain } from './ControlClasses/OcaGain.js';
import { OcaPanBalance } from './ControlClasses/OcaPanBalance.js';
import { OcaDelay } from './ControlClasses/OcaDelay.js';
import { OcaDelayExtended } from './ControlClasses/OcaDelayExtended.js';
import { OcaFrequencyActuator } from './ControlClasses/OcaFrequencyActuator.js';
import { OcaFilterClassical } from './ControlClasses/OcaFilterClassical.js';
import { OcaFilterParametric } from './ControlClasses/OcaFilterParametric.js';
import { OcaFilterPolynomial } from './ControlClasses/OcaFilterPolynomial.js';
import { OcaFilterFIR } from './ControlClasses/OcaFilterFIR.js';
import { OcaFilterArbitraryCurve } from './ControlClasses/OcaFilterArbitraryCurve.js';
import { OcaDynamics } from './ControlClasses/OcaDynamics.js';
import { OcaDynamicsDetector } from './ControlClasses/OcaDynamicsDetector.js';
import { OcaDynamicsCurve } from './ControlClasses/OcaDynamicsCurve.js';
import { OcaSignalGenerator } from './ControlClasses/OcaSignalGenerator.js';
import { OcaSignalInput } from './ControlClasses/OcaSignalInput.js';
import { OcaSignalOutput } from './ControlClasses/OcaSignalOutput.js';
import { OcaTemperatureActuator } from './ControlClasses/OcaTemperatureActuator.js';
import { OcaIdentificationActuator } from './ControlClasses/OcaIdentificationActuator.js';
import { OcaSummingPoint } from './ControlClasses/OcaSummingPoint.js';
import { OcaBasicActuator } from './ControlClasses/OcaBasicActuator.js';
import { OcaBooleanActuator } from './ControlClasses/OcaBooleanActuator.js';
import { OcaInt8Actuator } from './ControlClasses/OcaInt8Actuator.js';
import { OcaInt16Actuator } from './ControlClasses/OcaInt16Actuator.js';
import { OcaInt32Actuator } from './ControlClasses/OcaInt32Actuator.js';
import { OcaInt64Actuator } from './ControlClasses/OcaInt64Actuator.js';
import { OcaUint8Actuator } from './ControlClasses/OcaUint8Actuator.js';
import { OcaUint16Actuator } from './ControlClasses/OcaUint16Actuator.js';
import { OcaUint32Actuator } from './ControlClasses/OcaUint32Actuator.js';
import { OcaUint64Actuator } from './ControlClasses/OcaUint64Actuator.js';
import { OcaFloat32Actuator } from './ControlClasses/OcaFloat32Actuator.js';
import { OcaFloat64Actuator } from './ControlClasses/OcaFloat64Actuator.js';
import { OcaStringActuator } from './ControlClasses/OcaStringActuator.js';
import { OcaBitstringActuator } from './ControlClasses/OcaBitstringActuator.js';
import { OcaSensor } from './ControlClasses/OcaSensor.js';
import { OcaLevelSensor } from './ControlClasses/OcaLevelSensor.js';
import { OcaAudioLevelSensor } from './ControlClasses/OcaAudioLevelSensor.js';
import { OcaTimeIntervalSensor } from './ControlClasses/OcaTimeIntervalSensor.js';
import { OcaFrequencySensor } from './ControlClasses/OcaFrequencySensor.js';
import { OcaTemperatureSensor } from './ControlClasses/OcaTemperatureSensor.js';
import { OcaIdentificationSensor } from './ControlClasses/OcaIdentificationSensor.js';
import { OcaVoltageSensor } from './ControlClasses/OcaVoltageSensor.js';
import { OcaCurrentSensor } from './ControlClasses/OcaCurrentSensor.js';
import { OcaImpedanceSensor } from './ControlClasses/OcaImpedanceSensor.js';
import { OcaGainSensor } from './ControlClasses/OcaGainSensor.js';
import { OcaBasicSensor } from './ControlClasses/OcaBasicSensor.js';
import { OcaBooleanSensor } from './ControlClasses/OcaBooleanSensor.js';
import { OcaInt8Sensor } from './ControlClasses/OcaInt8Sensor.js';
import { OcaInt16Sensor } from './ControlClasses/OcaInt16Sensor.js';
import { OcaInt32Sensor } from './ControlClasses/OcaInt32Sensor.js';
import { OcaInt64Sensor } from './ControlClasses/OcaInt64Sensor.js';
import { OcaUint8Sensor } from './ControlClasses/OcaUint8Sensor.js';
import { OcaUint16Sensor } from './ControlClasses/OcaUint16Sensor.js';
import { OcaUint32Sensor } from './ControlClasses/OcaUint32Sensor.js';
import { OcaFloat32Sensor } from './ControlClasses/OcaFloat32Sensor.js';
import { OcaFloat64Sensor } from './ControlClasses/OcaFloat64Sensor.js';
import { OcaStringSensor } from './ControlClasses/OcaStringSensor.js';
import { OcaBitstringSensor } from './ControlClasses/OcaBitstringSensor.js';
import { OcaUint64Sensor } from './ControlClasses/OcaUint64Sensor.js';
import { OcaBlock } from './ControlClasses/OcaBlock.js';
import { OcaBlockFactory } from './ControlClasses/OcaBlockFactory.js';
import { OcaMatrix } from './ControlClasses/OcaMatrix.js';
import { OcaAgent } from './ControlClasses/OcaAgent.js';
import { OcaGrouper } from './ControlClasses/OcaGrouper.js';
import { OcaRamper } from './ControlClasses/OcaRamper.js';
import { OcaNumericObserver } from './ControlClasses/OcaNumericObserver.js';
import { OcaLibrary } from './ControlClasses/OcaLibrary.js';
import { OcaPowerSupply } from './ControlClasses/OcaPowerSupply.js';
import { OcaEventHandler } from './ControlClasses/OcaEventHandler.js';
import { OcaNumericObserverList } from './ControlClasses/OcaNumericObserverList.js';
import { OcaMediaClock3 } from './ControlClasses/OcaMediaClock3.js';
import { OcaTimeSource } from './ControlClasses/OcaTimeSource.js';
import { OcaPhysicalPosition } from './ControlClasses/OcaPhysicalPosition.js';
import { OcaApplicationNetwork } from './ControlClasses/OcaApplicationNetwork.js';
import { OcaControlNetwork } from './ControlClasses/OcaControlNetwork.js';
import { OcaMediaTransportNetwork } from './ControlClasses/OcaMediaTransportNetwork.js';
import { OcaManager } from './ControlClasses/OcaManager.js';
import { OcaDeviceManager } from './ControlClasses/OcaDeviceManager.js';
import { OcaSecurityManager } from './ControlClasses/OcaSecurityManager.js';
import { OcaFirmwareManager } from './ControlClasses/OcaFirmwareManager.js';
import { OcaSubscriptionManager } from './ControlClasses/OcaSubscriptionManager.js';
import { OcaPowerManager } from './ControlClasses/OcaPowerManager.js';
import { OcaNetworkManager } from './ControlClasses/OcaNetworkManager.js';
import { OcaMediaClockManager } from './ControlClasses/OcaMediaClockManager.js';
import { OcaLibraryManager } from './ControlClasses/OcaLibraryManager.js';
import { OcaAudioProcessingManager } from './ControlClasses/OcaAudioProcessingManager.js';
import { OcaDeviceTimeManager } from './ControlClasses/OcaDeviceTimeManager.js';
import { OcaTaskManager } from './ControlClasses/OcaTaskManager.js';
import { OcaCodingManager } from './ControlClasses/OcaCodingManager.js';
import { OcaDiagnosticManager } from './ControlClasses/OcaDiagnosticManager.js';
import { OcaNetworkSignalChannel } from './ControlClasses/OcaNetworkSignalChannel.js';
import { OcaNetwork } from './ControlClasses/OcaNetwork.js';
import { OcaMediaClock } from './ControlClasses/OcaMediaClock.js';
import { OcaStreamNetwork } from './ControlClasses/OcaStreamNetwork.js';
import { OcaStreamConnector } from './ControlClasses/OcaStreamConnector.js';

/**
 * All classes defined in this module by their ClassID.
 */
export const Classes = [
  OcaRoot,
  OcaWorker,
  OcaActuator,
  OcaMute,
  OcaPolarity,
  OcaSwitch,
  OcaGain,
  OcaPanBalance,
  OcaDelay,
  OcaDelayExtended,
  OcaFrequencyActuator,
  OcaFilterClassical,
  OcaFilterParametric,
  OcaFilterPolynomial,
  OcaFilterFIR,
  OcaFilterArbitraryCurve,
  OcaDynamics,
  OcaDynamicsDetector,
  OcaDynamicsCurve,
  OcaSignalGenerator,
  OcaSignalInput,
  OcaSignalOutput,
  OcaTemperatureActuator,
  OcaIdentificationActuator,
  OcaSummingPoint,
  OcaBasicActuator,
  OcaBooleanActuator,
  OcaInt8Actuator,
  OcaInt16Actuator,
  OcaInt32Actuator,
  OcaInt64Actuator,
  OcaUint8Actuator,
  OcaUint16Actuator,
  OcaUint32Actuator,
  OcaUint64Actuator,
  OcaFloat32Actuator,
  OcaFloat64Actuator,
  OcaStringActuator,
  OcaBitstringActuator,
  OcaSensor,
  OcaLevelSensor,
  OcaAudioLevelSensor,
  OcaTimeIntervalSensor,
  OcaFrequencySensor,
  OcaTemperatureSensor,
  OcaIdentificationSensor,
  OcaVoltageSensor,
  OcaCurrentSensor,
  OcaImpedanceSensor,
  OcaGainSensor,
  OcaBasicSensor,
  OcaBooleanSensor,
  OcaInt8Sensor,
  OcaInt16Sensor,
  OcaInt32Sensor,
  OcaInt64Sensor,
  OcaUint8Sensor,
  OcaUint16Sensor,
  OcaUint32Sensor,
  OcaFloat32Sensor,
  OcaFloat64Sensor,
  OcaStringSensor,
  OcaBitstringSensor,
  OcaUint64Sensor,
  OcaBlock,
  OcaBlockFactory,
  OcaMatrix,
  OcaAgent,
  OcaGrouper,
  OcaRamper,
  OcaNumericObserver,
  OcaLibrary,
  OcaPowerSupply,
  OcaEventHandler,
  OcaNumericObserverList,
  OcaMediaClock3,
  OcaTimeSource,
  OcaPhysicalPosition,
  OcaApplicationNetwork,
  OcaControlNetwork,
  OcaMediaTransportNetwork,
  OcaManager,
  OcaDeviceManager,
  OcaSecurityManager,
  OcaFirmwareManager,
  OcaSubscriptionManager,
  OcaPowerManager,
  OcaNetworkManager,
  OcaMediaClockManager,
  OcaLibraryManager,
  OcaAudioProcessingManager,
  OcaDeviceTimeManager,
  OcaTaskManager,
  OcaCodingManager,
  OcaDiagnosticManager,
  OcaNetworkSignalChannel,
  OcaNetwork,
  OcaMediaClock,
  OcaStreamNetwork,
  OcaStreamConnector,
];
