OcaCurrentSensor
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaCurrentSensor.html>`_.

The class is a subclass of :class:`OcaSensor`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Reading                                   number                                 OcaCurrent
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ReadingState and Reading.

.. js:autoclass:: OcaCurrentSensor(objectNumber, device)
  :members:
