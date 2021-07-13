OcaBlockFactory
===============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaBlockFactory.html>`_.

The class is a subclass of :class:`OcaWorker`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               ProtoPorts                             OcaProtoPort[]                       OcaList<OcaProtoPort>
              ProtoMembers                    OcaProtoObjectIdentification[]       OcaList<OcaProtoObjectIdentification>
            ProtoSignalPaths                 Map<number, OcaProtoSignalPath>       OcaMap<OcaUint16, OcaProtoSignalPath>
               GlobalType                        OcaGlobalTypeIdentifier                  OcaGlobalTypeIdentifier
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, ProtoPorts, ProtoMembers, ProtoSignalPaths and GlobalType.

.. js:autoclass:: OcaBlockFactory(objectNumber, device)
  :members:
