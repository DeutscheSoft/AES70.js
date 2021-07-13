OcaDynamicsCurve
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDynamicsCurve.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               NSegments                                  number                                  OcaUint8
               Threshold                                 OcaDBr[]                             OcaList<OcaDBr>
                 Slope                                   number[]                           OcaList<OcaFloat32>
             KneeParameter                               number[]                           OcaList<OcaFloat32>
            DynamicGainFloor                              number                                   OcaDB
           DynamicGainCeiling                             number                                   OcaDB
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, NSegments, Threshold, Slope, KneeParameter, DynamicGainFloor and DynamicGainCeiling.

.. js:autoclass:: OcaDynamicsCurve(objectNumber, device)
  :members:
