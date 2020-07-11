/*
 * @namespace RemoteControlClasses
 * This namespace contains all control classes generated from the AES70
 * standards document. It currently contains all classes defined in
 * AES70-2018.
 */

import { OcaRoot } from './OcaRoot.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaMute } from './OcaMute.js';
import { OcaPolarity } from './OcaPolarity.js';
import { OcaSwitch } from './OcaSwitch.js';
import { OcaGain } from './OcaGain.js';
import { OcaPanBalance } from './OcaPanBalance.js';
import { OcaDelay } from './OcaDelay.js';
import { OcaDelayExtended } from './OcaDelayExtended.js';
import { OcaFrequencyActuator } from './OcaFrequencyActuator.js';
import { OcaFilterClassical } from './OcaFilterClassical.js';
import { OcaFilterParametric } from './OcaFilterParametric.js';
import { OcaFilterPolynomial } from './OcaFilterPolynomial.js';
import { OcaFilterFIR } from './OcaFilterFIR.js';
import { OcaFilterArbitraryCurve } from './OcaFilterArbitraryCurve.js';
import { OcaDynamics } from './OcaDynamics.js';
import { OcaDynamicsDetector } from './OcaDynamicsDetector.js';
import { OcaDynamicsCurve } from './OcaDynamicsCurve.js';
import { OcaSignalGenerator } from './OcaSignalGenerator.js';
import { OcaSignalInput } from './OcaSignalInput.js';
import { OcaSignalOutput } from './OcaSignalOutput.js';
import { OcaTemperatureActuator } from './OcaTemperatureActuator.js';
import { OcaIdentificationActuator } from './OcaIdentificationActuator.js';
import { OcaSummingPoint } from './OcaSummingPoint.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaBooleanActuator } from './OcaBooleanActuator.js';
import { OcaInt8Actuator } from './OcaInt8Actuator.js';
import { OcaInt16Actuator } from './OcaInt16Actuator.js';
import { OcaInt32Actuator } from './OcaInt32Actuator.js';
import { OcaInt64Actuator } from './OcaInt64Actuator.js';
import { OcaUint8Actuator } from './OcaUint8Actuator.js';
import { OcaUint16Actuator } from './OcaUint16Actuator.js';
import { OcaUint32Actuator } from './OcaUint32Actuator.js';
import { OcaUint64Actuator } from './OcaUint64Actuator.js';
import { OcaFloat32Actuator } from './OcaFloat32Actuator.js';
import { OcaFloat64Actuator } from './OcaFloat64Actuator.js';
import { OcaStringActuator } from './OcaStringActuator.js';
import { OcaBitstringActuator } from './OcaBitstringActuator.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaLevelSensor } from './OcaLevelSensor.js';
import { OcaAudioLevelSensor } from './OcaAudioLevelSensor.js';
import { OcaTimeIntervalSensor } from './OcaTimeIntervalSensor.js';
import { OcaFrequencySensor } from './OcaFrequencySensor.js';
import { OcaTemperatureSensor } from './OcaTemperatureSensor.js';
import { OcaIdentificationSensor } from './OcaIdentificationSensor.js';
import { OcaVoltageSensor } from './OcaVoltageSensor.js';
import { OcaCurrentSensor } from './OcaCurrentSensor.js';
import { OcaImpedanceSensor } from './OcaImpedanceSensor.js';
import { OcaGainSensor } from './OcaGainSensor.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaBooleanSensor } from './OcaBooleanSensor.js';
import { OcaInt8Sensor } from './OcaInt8Sensor.js';
import { OcaInt16Sensor } from './OcaInt16Sensor.js';
import { OcaInt32Sensor } from './OcaInt32Sensor.js';
import { OcaInt64Sensor } from './OcaInt64Sensor.js';
import { OcaUint8Sensor } from './OcaUint8Sensor.js';
import { OcaUint16Sensor } from './OcaUint16Sensor.js';
import { OcaUint32Sensor } from './OcaUint32Sensor.js';
import { OcaFloat32Sensor } from './OcaFloat32Sensor.js';
import { OcaFloat64Sensor } from './OcaFloat64Sensor.js';
import { OcaStringSensor } from './OcaStringSensor.js';
import { OcaBitstringSensor } from './OcaBitstringSensor.js';
import { OcaUint64Sensor } from './OcaUint64Sensor.js';
import { OcaBlock } from './OcaBlock.js';
import { OcaBlockFactory } from './OcaBlockFactory.js';
import { OcaMatrix } from './OcaMatrix.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaGrouper } from './OcaGrouper.js';
import { OcaRamper } from './OcaRamper.js';
import { OcaNumericObserver } from './OcaNumericObserver.js';
import { OcaLibrary } from './OcaLibrary.js';
import { OcaPowerSupply } from './OcaPowerSupply.js';
import { OcaEventHandler } from './OcaEventHandler.js';
import { OcaNumericObserverList } from './OcaNumericObserverList.js';
import { OcaMediaClock3 } from './OcaMediaClock3.js';
import { OcaTimeSource } from './OcaTimeSource.js';
import { OcaPhysicalPosition } from './OcaPhysicalPosition.js';
import { OcaApplicationNetwork } from './OcaApplicationNetwork.js';
import { OcaControlNetwork } from './OcaControlNetwork.js';
import { OcaMediaTransportNetwork } from './OcaMediaTransportNetwork.js';
import { OcaManager } from './OcaManager.js';
import { OcaDeviceManager } from './OcaDeviceManager.js';
import { OcaSecurityManager } from './OcaSecurityManager.js';
import { OcaFirmwareManager } from './OcaFirmwareManager.js';
import { OcaSubscriptionManager } from './OcaSubscriptionManager.js';
import { OcaPowerManager } from './OcaPowerManager.js';
import { OcaNetworkManager } from './OcaNetworkManager.js';
import { OcaMediaClockManager } from './OcaMediaClockManager.js';
import { OcaLibraryManager } from './OcaLibraryManager.js';
import { OcaAudioProcessingManager } from './OcaAudioProcessingManager.js';
import { OcaDeviceTimeManager } from './OcaDeviceTimeManager.js';
import { OcaTaskManager } from './OcaTaskManager.js';
import { OcaCodingManager } from './OcaCodingManager.js';
import { OcaDiagnosticManager } from './OcaDiagnosticManager.js';
import { OcaNetworkSignalChannel } from './OcaNetworkSignalChannel.js';
import { OcaNetwork } from './OcaNetwork.js';
import { OcaMediaClock } from './OcaMediaClock.js';
import { OcaStreamNetwork } from './OcaStreamNetwork.js';
import { OcaStreamConnector } from './OcaStreamConnector.js';

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
