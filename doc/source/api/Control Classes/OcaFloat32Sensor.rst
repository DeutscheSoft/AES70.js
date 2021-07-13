OcaFloat32Sensor
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaFloat32Sensor.html>`_.

The class is a subclass of :class:`OcaBasicSensor`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Reading                                   number                                 OcaFloat32
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ReadingState and Reading.

.. js:autoclass:: OcaFloat32Sensor(objectNumber, device)
  :members:
