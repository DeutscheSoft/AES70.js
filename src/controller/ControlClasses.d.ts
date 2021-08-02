/*
 * This module contains all control classes generated from the AES70
 * standards document. It currently contains all classes defined in
 * AES70-2018.
 */

import { ObjectBase } from './object_base';
import { OcaRoot } from './ControlClasses/OcaRoot';
import { OcaWorker } from './ControlClasses/OcaWorker';
import { OcaActuator } from './ControlClasses/OcaActuator';
import { OcaMute } from './ControlClasses/OcaMute';
import { OcaPolarity } from './ControlClasses/OcaPolarity';
import { OcaSwitch } from './ControlClasses/OcaSwitch';
import { OcaGain } from './ControlClasses/OcaGain';
import { OcaPanBalance } from './ControlClasses/OcaPanBalance';
import { OcaDelay } from './ControlClasses/OcaDelay';
import { OcaDelayExtended } from './ControlClasses/OcaDelayExtended';
import { OcaFrequencyActuator } from './ControlClasses/OcaFrequencyActuator';
import { OcaFilterClassical } from './ControlClasses/OcaFilterClassical';
import { OcaFilterParametric } from './ControlClasses/OcaFilterParametric';
import { OcaFilterPolynomial } from './ControlClasses/OcaFilterPolynomial';
import { OcaFilterFIR } from './ControlClasses/OcaFilterFIR';
import { OcaFilterArbitraryCurve } from './ControlClasses/OcaFilterArbitraryCurve';
import { OcaDynamics } from './ControlClasses/OcaDynamics';
import { OcaDynamicsDetector } from './ControlClasses/OcaDynamicsDetector';
import { OcaDynamicsCurve } from './ControlClasses/OcaDynamicsCurve';
import { OcaSignalGenerator } from './ControlClasses/OcaSignalGenerator';
import { OcaSignalInput } from './ControlClasses/OcaSignalInput';
import { OcaSignalOutput } from './ControlClasses/OcaSignalOutput';
import { OcaTemperatureActuator } from './ControlClasses/OcaTemperatureActuator';
import { OcaIdentificationActuator } from './ControlClasses/OcaIdentificationActuator';
import { OcaSummingPoint } from './ControlClasses/OcaSummingPoint';
import { OcaBasicActuator } from './ControlClasses/OcaBasicActuator';
import { OcaBooleanActuator } from './ControlClasses/OcaBooleanActuator';
import { OcaInt8Actuator } from './ControlClasses/OcaInt8Actuator';
import { OcaInt16Actuator } from './ControlClasses/OcaInt16Actuator';
import { OcaInt32Actuator } from './ControlClasses/OcaInt32Actuator';
import { OcaInt64Actuator } from './ControlClasses/OcaInt64Actuator';
import { OcaUint8Actuator } from './ControlClasses/OcaUint8Actuator';
import { OcaUint16Actuator } from './ControlClasses/OcaUint16Actuator';
import { OcaUint32Actuator } from './ControlClasses/OcaUint32Actuator';
import { OcaUint64Actuator } from './ControlClasses/OcaUint64Actuator';
import { OcaFloat32Actuator } from './ControlClasses/OcaFloat32Actuator';
import { OcaFloat64Actuator } from './ControlClasses/OcaFloat64Actuator';
import { OcaStringActuator } from './ControlClasses/OcaStringActuator';
import { OcaBitstringActuator } from './ControlClasses/OcaBitstringActuator';
import { OcaSensor } from './ControlClasses/OcaSensor';
import { OcaLevelSensor } from './ControlClasses/OcaLevelSensor';
import { OcaAudioLevelSensor } from './ControlClasses/OcaAudioLevelSensor';
import { OcaTimeIntervalSensor } from './ControlClasses/OcaTimeIntervalSensor';
import { OcaFrequencySensor } from './ControlClasses/OcaFrequencySensor';
import { OcaTemperatureSensor } from './ControlClasses/OcaTemperatureSensor';
import { OcaIdentificationSensor } from './ControlClasses/OcaIdentificationSensor';
import { OcaVoltageSensor } from './ControlClasses/OcaVoltageSensor';
import { OcaCurrentSensor } from './ControlClasses/OcaCurrentSensor';
import { OcaImpedanceSensor } from './ControlClasses/OcaImpedanceSensor';
import { OcaGainSensor } from './ControlClasses/OcaGainSensor';
import { OcaBasicSensor } from './ControlClasses/OcaBasicSensor';
import { OcaBooleanSensor } from './ControlClasses/OcaBooleanSensor';
import { OcaInt8Sensor } from './ControlClasses/OcaInt8Sensor';
import { OcaInt16Sensor } from './ControlClasses/OcaInt16Sensor';
import { OcaInt32Sensor } from './ControlClasses/OcaInt32Sensor';
import { OcaInt64Sensor } from './ControlClasses/OcaInt64Sensor';
import { OcaUint8Sensor } from './ControlClasses/OcaUint8Sensor';
import { OcaUint16Sensor } from './ControlClasses/OcaUint16Sensor';
import { OcaUint32Sensor } from './ControlClasses/OcaUint32Sensor';
import { OcaFloat32Sensor } from './ControlClasses/OcaFloat32Sensor';
import { OcaFloat64Sensor } from './ControlClasses/OcaFloat64Sensor';
import { OcaStringSensor } from './ControlClasses/OcaStringSensor';
import { OcaBitstringSensor } from './ControlClasses/OcaBitstringSensor';
import { OcaUint64Sensor } from './ControlClasses/OcaUint64Sensor';
import { OcaBlock } from './ControlClasses/OcaBlock';
import { OcaBlockFactory } from './ControlClasses/OcaBlockFactory';
import { OcaMatrix } from './ControlClasses/OcaMatrix';
import { OcaAgent } from './ControlClasses/OcaAgent';
import { OcaGrouper } from './ControlClasses/OcaGrouper';
import { OcaRamper } from './ControlClasses/OcaRamper';
import { OcaNumericObserver } from './ControlClasses/OcaNumericObserver';
import { OcaLibrary } from './ControlClasses/OcaLibrary';
import { OcaPowerSupply } from './ControlClasses/OcaPowerSupply';
import { OcaEventHandler } from './ControlClasses/OcaEventHandler';
import { OcaNumericObserverList } from './ControlClasses/OcaNumericObserverList';
import { OcaMediaClock3 } from './ControlClasses/OcaMediaClock3';
import { OcaTimeSource } from './ControlClasses/OcaTimeSource';
import { OcaPhysicalPosition } from './ControlClasses/OcaPhysicalPosition';
import { OcaApplicationNetwork } from './ControlClasses/OcaApplicationNetwork';
import { OcaControlNetwork } from './ControlClasses/OcaControlNetwork';
import { OcaMediaTransportNetwork } from './ControlClasses/OcaMediaTransportNetwork';
import { OcaManager } from './ControlClasses/OcaManager';
import { OcaDeviceManager } from './ControlClasses/OcaDeviceManager';
import { OcaSecurityManager } from './ControlClasses/OcaSecurityManager';
import { OcaFirmwareManager } from './ControlClasses/OcaFirmwareManager';
import { OcaSubscriptionManager } from './ControlClasses/OcaSubscriptionManager';
import { OcaPowerManager } from './ControlClasses/OcaPowerManager';
import { OcaNetworkManager } from './ControlClasses/OcaNetworkManager';
import { OcaMediaClockManager } from './ControlClasses/OcaMediaClockManager';
import { OcaLibraryManager } from './ControlClasses/OcaLibraryManager';
import { OcaAudioProcessingManager } from './ControlClasses/OcaAudioProcessingManager';
import { OcaDeviceTimeManager } from './ControlClasses/OcaDeviceTimeManager';
import { OcaTaskManager } from './ControlClasses/OcaTaskManager';
import { OcaCodingManager } from './ControlClasses/OcaCodingManager';
import { OcaDiagnosticManager } from './ControlClasses/OcaDiagnosticManager';
import { OcaNetworkSignalChannel } from './ControlClasses/OcaNetworkSignalChannel';
import { OcaNetwork } from './ControlClasses/OcaNetwork';
import { OcaMediaClock } from './ControlClasses/OcaMediaClock';
import { OcaStreamNetwork } from './ControlClasses/OcaStreamNetwork';
import { OcaStreamConnector } from './ControlClasses/OcaStreamConnector';

export {
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
};
