OcaTimeSource
=============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaTimeSource.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
              Availability                      OcaTimeSourceAvailability                OcaTimeSourceAvailability
                Protocol                             OcaTimeProtocol                          OcaTimeProtocol
               Parameters                                 string                                OcaSDPString
             ReferenceType                         OcaTimeReferenceType                     OcaTimeReferenceType
              ReferenceID                                 string                                 OcaString
               SyncStatus                        OcaTimeSourceSyncStatus                  OcaTimeSourceSyncStatus
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, Availability, Protocol, Parameters, ReferenceType, ReferenceID and SyncStatus.

.. js:autoclass:: OcaTimeSource(objectNumber, device)
  :members:
