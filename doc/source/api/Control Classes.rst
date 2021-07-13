===============
Control Classes
===============

Control classes are AES70 objects which can be controlled remotely by calling
remote methods. The controller implementations in this library match the APIs
specified for these classes in the AES70 standard. See
http://docs.deuso.de/AES70-OCC/Control%20Classes.html for an online version of
all control classes defined in AES70 and their APIs.

The implementation of remote method calls follows a simple schema. Input
parameters defined in AES70 are passed as arguments. The return value is always
a Promise which - if the call succeeds - resolves either to a single return value
or an instance of :class:`Arguments` if the method has more than one output
parameter. If the method call fails (i.e. the return status is not ``OK``), the
promises is rejected with an instance of :class:`RemoteError`.

Events defined by control classes are implemented as properties of type
:class:`Event`. The property will have the same name as the corresponding AES70
event prefixed by ``On``. For example, the `PropertyChanged` event in
:class:`OcaRoot` will result in an ``OnPropertyChanged`` property on the
corresponding control class.
For convenience, for each property defined by a control class, there exists a
special event of type :class:`PropertyEvent` with the name ``On<NAME>Changed``.

.. toctree::
  :maxdepth: 3

  Control Classes/OcaRoot
  Control Classes/OcaWorker
  Control Classes/OcaActuator
  Control Classes/OcaMute
  Control Classes/OcaPolarity
  Control Classes/OcaSwitch
  Control Classes/OcaGain
  Control Classes/OcaPanBalance
  Control Classes/OcaDelay
  Control Classes/OcaDelayExtended
  Control Classes/OcaFrequencyActuator
  Control Classes/OcaFilterClassical
  Control Classes/OcaFilterParametric
  Control Classes/OcaFilterPolynomial
  Control Classes/OcaFilterFIR
  Control Classes/OcaFilterArbitraryCurve
  Control Classes/OcaDynamics
  Control Classes/OcaDynamicsDetector
  Control Classes/OcaDynamicsCurve
  Control Classes/OcaSignalGenerator
  Control Classes/OcaSignalInput
  Control Classes/OcaSignalOutput
  Control Classes/OcaTemperatureActuator
  Control Classes/OcaIdentificationActuator
  Control Classes/OcaSummingPoint
  Control Classes/OcaBasicActuator
  Control Classes/OcaBooleanActuator
  Control Classes/OcaInt8Actuator
  Control Classes/OcaInt16Actuator
  Control Classes/OcaInt32Actuator
  Control Classes/OcaInt64Actuator
  Control Classes/OcaUint8Actuator
  Control Classes/OcaUint16Actuator
  Control Classes/OcaUint32Actuator
  Control Classes/OcaUint64Actuator
  Control Classes/OcaFloat32Actuator
  Control Classes/OcaFloat64Actuator
  Control Classes/OcaStringActuator
  Control Classes/OcaBitstringActuator
  Control Classes/OcaSensor
  Control Classes/OcaLevelSensor
  Control Classes/OcaAudioLevelSensor
  Control Classes/OcaTimeIntervalSensor
  Control Classes/OcaFrequencySensor
  Control Classes/OcaTemperatureSensor
  Control Classes/OcaIdentificationSensor
  Control Classes/OcaVoltageSensor
  Control Classes/OcaCurrentSensor
  Control Classes/OcaImpedanceSensor
  Control Classes/OcaGainSensor
  Control Classes/OcaBasicSensor
  Control Classes/OcaBooleanSensor
  Control Classes/OcaInt8Sensor
  Control Classes/OcaInt16Sensor
  Control Classes/OcaInt32Sensor
  Control Classes/OcaInt64Sensor
  Control Classes/OcaUint8Sensor
  Control Classes/OcaUint16Sensor
  Control Classes/OcaUint32Sensor
  Control Classes/OcaFloat32Sensor
  Control Classes/OcaFloat64Sensor
  Control Classes/OcaStringSensor
  Control Classes/OcaBitstringSensor
  Control Classes/OcaUint64Sensor
  Control Classes/OcaBlock
  Control Classes/OcaBlockFactory
  Control Classes/OcaMatrix
  Control Classes/OcaAgent
  Control Classes/OcaGrouper
  Control Classes/OcaRamper
  Control Classes/OcaNumericObserver
  Control Classes/OcaLibrary
  Control Classes/OcaPowerSupply
  Control Classes/OcaEventHandler
  Control Classes/OcaNumericObserverList
  Control Classes/OcaMediaClock3
  Control Classes/OcaTimeSource
  Control Classes/OcaPhysicalPosition
  Control Classes/OcaApplicationNetwork
  Control Classes/OcaControlNetwork
  Control Classes/OcaMediaTransportNetwork
  Control Classes/OcaManager
  Control Classes/OcaDeviceManager
  Control Classes/OcaSecurityManager
  Control Classes/OcaFirmwareManager
  Control Classes/OcaSubscriptionManager
  Control Classes/OcaPowerManager
  Control Classes/OcaNetworkManager
  Control Classes/OcaMediaClockManager
  Control Classes/OcaLibraryManager
  Control Classes/OcaAudioProcessingManager
  Control Classes/OcaDeviceTimeManager
  Control Classes/OcaTaskManager
  Control Classes/OcaCodingManager
  Control Classes/OcaDiagnosticManager
  Control Classes/OcaNetworkSignalChannel
  Control Classes/OcaNetwork
  Control Classes/OcaMediaClock
  Control Classes/OcaStreamNetwork
  Control Classes/OcaStreamConnector