OcaFilterArbitraryCurve
=======================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaFilterArbitraryCurve.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
            TransferFunction                       OcaTransferFunction                      OcaTransferFunction
               SampleRate                                 number                                OcaFrequency
              TFMinLength                                 number                                 OcaUint16
              TFMaxLength                                 number                                 OcaUint16
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, TransferFunction, SampleRate, TFMinLength and TFMaxLength.

.. js:autoclass:: OcaFilterArbitraryCurve(objectNumber, device)
  :members:
