OcaWorker
=========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaWorker.html>`_.

The class is a subclass of :class:`OcaRoot`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Enabled                                  boolean                                 OcaBoolean
                 Ports                                  OcaPort[]                             OcaList<OcaPort>
                 Label                                    string                                 OcaString
                 Owner                                    number                                   OcaONo
                Latency                                   number                              OcaTimeInterval
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner and Latency.

.. js:autoclass:: OcaWorker(objectNumber, device)
  :members:
