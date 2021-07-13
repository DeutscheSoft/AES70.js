OcaNumericObserver
==================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaNumericObserver.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 State                               OcaObserverState                         OcaObserverState
            ObservedProperty                           OcaProperty                              OcaProperty
               Threshold                                  number                                 OcaFloat64
                Operator                          OcaRelationalOperator                    OcaRelationalOperator
                 TwoWay                                  boolean                                 OcaBoolean
               Hysteresis                                 number                                 OcaFloat64
                 Period                                   number                              OcaTimeInterval
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, State, ObservedProperty, Threshold, Operator, TwoWay, Hysteresis and Period.

.. js:autoclass:: OcaNumericObserver(objectNumber, device)
  :members:
