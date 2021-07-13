OcaBlock
========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaBlock.html>`_.

The class is a subclass of :class:`OcaWorker`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                  Type                                    number                                   OcaONo
                Members                         OcaObjectIdentification[]             OcaList<OcaObjectIdentification>
              SignalPaths                       Map<number, OcaSignalPath>            OcaMap<OcaUint16, OcaSignalPath>
      MostRecentParamSetIdentifier                 OcaLibVolIdentifier                      OcaLibVolIdentifier
               GlobalType                        OcaGlobalTypeIdentifier                  OcaGlobalTypeIdentifier
                 ONoMap                            Map<number, number>                  OcaMap<OcaProtoONo, OcaONo>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Type, Members, SignalPaths, MostRecentParamSetIdentifier, GlobalType and ONoMap.

.. js:autoclass:: OcaBlock(objectNumber, device)
  :members:
