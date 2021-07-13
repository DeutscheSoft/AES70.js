OcaDelay
========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDelay.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               DelayTime                                  number                              OcaTimeInterval
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency and DelayTime.

.. js:autoclass:: OcaDelay(objectNumber, device)
  :members:
