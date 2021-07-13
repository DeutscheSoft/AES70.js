OcaPowerManager
===============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaPowerManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 State                                OcaPowerState                            OcaPowerState
             PowerSupplies                               number[]                             OcaList<OcaONo>
          ActivePowerSupplies                            number[]                             OcaList<OcaONo>
               AutoState                                 boolean                                 OcaBoolean
              TargetState                             OcaPowerState                            OcaPowerState
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, State, PowerSupplies, ActivePowerSupplies, AutoState and TargetState.

.. js:autoclass:: OcaPowerManager(objectNumber, device)
  :members:
