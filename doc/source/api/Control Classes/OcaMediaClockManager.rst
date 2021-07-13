OcaMediaClockManager
====================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaMediaClockManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
       ClockSourceTypesSupported                   OcaMediaClockType[]                   OcaList<OcaMediaClockType>
                 Clocks                                  number[]                             OcaList<OcaONo>
                Clock3s                                  number[]                             OcaList<OcaONo>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, ClockSourceTypesSupported, Clocks and Clock3s.

.. js:autoclass:: OcaMediaClockManager(objectNumber, device)
  :members:
