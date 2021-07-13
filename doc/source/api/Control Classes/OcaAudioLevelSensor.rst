OcaAudioLevelSensor
===================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaAudioLevelSensor.html>`_.

The class is a subclass of :class:`OcaLevelSensor`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                  Law                                OcaLevelMeterLaw                         OcaLevelMeterLaw
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ReadingState, Reading and Law.

.. js:autoclass:: OcaAudioLevelSensor(objectNumber, device)
  :members:
