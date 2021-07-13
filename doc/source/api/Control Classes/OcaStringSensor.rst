OcaStringSensor
===============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaStringSensor.html>`_.

The class is a subclass of :class:`OcaBasicSensor`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 String                                   string                                 OcaString
                 MaxLen                                   number                                 OcaUint16
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ReadingState, String and MaxLen.

.. js:autoclass:: OcaStringSensor(objectNumber, device)
  :members:
