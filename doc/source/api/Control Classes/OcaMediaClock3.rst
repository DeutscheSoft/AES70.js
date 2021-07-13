OcaMediaClock3
==============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaMediaClock3.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
              Availability                      OcaMediaClockAvailability                OcaMediaClockAvailability
             TimeSourceONo                                number                                   OcaONo
                 Offset                                 OcaTimePTP                               OcaTimePTP
              CurrentRate                           OcaMediaClockRate                        OcaMediaClockRate
             SupportedRates                  Map<number, OcaMediaClockRate[]>     OcaMap<OcaONo, OcaList<OcaMediaClockRate>>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, Availability, TimeSourceONo, Offset, CurrentRate and SupportedRates.

.. js:autoclass:: OcaMediaClock3(objectNumber, device)
  :members:
