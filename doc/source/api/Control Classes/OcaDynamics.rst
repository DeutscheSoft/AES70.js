OcaDynamics
===========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDynamics.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               Triggered                                 boolean                                 OcaBoolean
              DynamicGain                                 number                                   OcaDB
                Function                           OcaDynamicsFunction                      OcaDynamicsFunction
                 Ratio                                    number                                 OcaFloat32
               Threshold                                  OcaDBr                                   OcaDBr
       ThresholdPresentationUnits                  OcaPresentationUnit                      OcaPresentationUnit
              DetectorLaw                          OcaLevelDetectionLaw                     OcaLevelDetectionLaw
               AttackTime                                 number                              OcaTimeInterval
              ReleaseTime                                 number                              OcaTimeInterval
                HoldTime                                  number                              OcaTimeInterval
           DynamicGainCeiling                             number                                   OcaDB
            DynamicGainFloor                              number                                   OcaDB
             KneeParameter                                number                                 OcaFloat32
                 Slope                                    number                                 OcaFloat32
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Triggered, DynamicGain, Function, Ratio, Threshold, ThresholdPresentationUnits, DetectorLaw, AttackTime, ReleaseTime, HoldTime, DynamicGainCeiling, DynamicGainFloor, KneeParameter and Slope.

.. js:autoclass:: OcaDynamics(objectNumber, device)
  :members:
