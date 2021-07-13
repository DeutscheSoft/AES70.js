OcaFilterParametric
===================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaFilterParametric.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               Frequency                                  number                                OcaFrequency
                 Shape                             OcaParametricEQShape                     OcaParametricEQShape
             WidthParameter                               number                                 OcaFloat32
               InbandGain                                 number                                   OcaDB
             ShapeParameter                               number                                 OcaFloat32
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Frequency, Shape, WidthParameter, InbandGain and ShapeParameter.

.. js:autoclass:: OcaFilterParametric(objectNumber, device)
  :members:
