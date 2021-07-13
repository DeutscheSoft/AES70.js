OcaDynamicsDetector
===================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDynamicsDetector.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                  Law                              OcaLevelDetectionLaw                     OcaLevelDetectionLaw
               AttackTime                                 number                              OcaTimeInterval
              ReleaseTime                                 number                              OcaTimeInterval
                HoldTime                                  number                              OcaTimeInterval
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Law, AttackTime, ReleaseTime and HoldTime.

.. js:autoclass:: OcaDynamicsDetector(objectNumber, device)
  :members:
