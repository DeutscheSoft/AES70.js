OcaSensor
=========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaSensor.html>`_.

The class is a subclass of :class:`OcaWorker`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
              ReadingState                        OcaSensorReadingState                    OcaSensorReadingState
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency and ReadingState.

.. js:autoclass:: OcaSensor(objectNumber, device)
  :members:
