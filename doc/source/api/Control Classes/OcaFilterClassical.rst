OcaFilterClassical
==================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaFilterClassical.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               Frequency                                  number                                OcaFrequency
                Passband                            OcaFilterPassband                        OcaFilterPassband
                 Shape                           OcaClassicalFilterShape                  OcaClassicalFilterShape
                 Order                                    number                                 OcaUint16
               Parameter                                  number                                 OcaFloat32
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Frequency, Passband, Shape, Order and Parameter.

.. js:autoclass:: OcaFilterClassical(objectNumber, device)
  :members:
