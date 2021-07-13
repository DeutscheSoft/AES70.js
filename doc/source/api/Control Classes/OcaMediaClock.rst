OcaMediaClock
=============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaMediaClock.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                  Type                              OcaMediaClockType                        OcaMediaClockType
                DomainID                                  number                                 OcaUint16
             RatesSupported                        OcaMediaClockRate[]                   OcaList<OcaMediaClockRate>
              CurrentRate                           OcaMediaClockRate                        OcaMediaClockRate
               LockState                          OcaMediaClockLockState                   OcaMediaClockLockState
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, Type, DomainID, RatesSupported, CurrentRate and LockState.

.. js:autoclass:: OcaMediaClock(objectNumber, device)
  :members:
