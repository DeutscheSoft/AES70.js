OcaPowerSupply
==============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaPowerSupply.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                  Type                              OcaPowerSupplyType                       OcaPowerSupplyType
               ModelInfo                                  string                                 OcaString
                 State                             OcaPowerSupplyState                      OcaPowerSupplyState
                Charging                                 boolean                                 OcaBoolean
         LoadFractionAvailable                            number                                 OcaFloat32
        StorageFractionAvailable                          number                                 OcaFloat32
                Location                          OcaPowerSupplyLocation                   OcaPowerSupplyLocation
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, Type, ModelInfo, State, Charging, LoadFractionAvailable, StorageFractionAvailable and Location.

.. js:autoclass:: OcaPowerSupply(objectNumber, device)
  :members:
