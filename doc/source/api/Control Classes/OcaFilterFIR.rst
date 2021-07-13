OcaFilterFIR
============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaFilterFIR.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 Length                                   number                                 OcaUint32
              Coefficients                               number[]                           OcaList<OcaFloat32>
               SampleRate                                 number                                OcaFrequency
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Length, Coefficients and SampleRate.

.. js:autoclass:: OcaFilterFIR(objectNumber, device)
  :members:
