OcaSignalGenerator
==================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaSignalGenerator.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               Frequency1                                 number                                OcaFrequency
               Frequency2                                 number                                OcaFrequency
                 Level                                    number                                   OcaDBz
                Waveform                             OcaWaveformType                          OcaWaveformType
               SweepType                               OcaSweepType                             OcaSweepType
               SweepTime                                  number                              OcaTimeInterval
              SweepRepeat                                boolean                                 OcaBoolean
               Generating                                boolean                                 OcaBoolean
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Frequency1, Frequency2, Level, Waveform, SweepType, SweepTime, SweepRepeat and Generating.

.. js:autoclass:: OcaSignalGenerator(objectNumber, device)
  :members:
