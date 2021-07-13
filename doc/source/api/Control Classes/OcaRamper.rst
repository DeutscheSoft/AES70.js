OcaRamper
=========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaRamper.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 State                                OcaRamperState                           OcaRamperState
             RampedProperty                            OcaProperty                              OcaProperty
                TimeMode                               OcaTimeMode                              OcaTimeMode
               StartTime                              number|BigInt                              OcaTimeNTP
                Duration                                  number                              OcaTimeInterval
            InterpolationLaw                    OcaRamperInterpolationLaw                OcaRamperInterpolationLaw
                  Goal                                    number                                 OcaFloat64
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, State, RampedProperty, TimeMode, StartTime, Duration, InterpolationLaw and Goal.

.. js:autoclass:: OcaRamper(objectNumber, device)
  :members:
