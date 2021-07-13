OcaBitstringSensor
==================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaBitstringSensor.html>`_.

The class is a subclass of :class:`OcaBasicSensor`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               BitString                                boolean[]                               OcaBitstring
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ReadingState and BitString.

.. js:autoclass:: OcaBitstringSensor(objectNumber, device)
  :members:
