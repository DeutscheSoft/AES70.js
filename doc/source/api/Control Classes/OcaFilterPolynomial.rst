OcaFilterPolynomial
===================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaFilterPolynomial.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                   A                                     number[]                           OcaList<OcaFloat32>
                   B                                     number[]                           OcaList<OcaFloat32>
               SampleRate                                 number                                OcaFrequency
                MaxOrder                                  number                                  OcaUint8
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, A, B, SampleRate and MaxOrder.

.. js:autoclass:: OcaFilterPolynomial(objectNumber, device)
  :members:
