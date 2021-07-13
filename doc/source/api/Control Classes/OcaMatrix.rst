OcaMatrix
=========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaMatrix.html>`_.

The class is a subclass of :class:`OcaWorker`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                   X                                      number                            OcaMatrixCoordinate
                   Y                                      number                            OcaMatrixCoordinate
                 xSize                                    number                            OcaMatrixCoordinate
                 ySize                                    number                            OcaMatrixCoordinate
                Members                                 number[][]                           OcaList2D<OcaONo>
                 Proxy                                    number                                   OcaONo
              PortsPerRow                                 number                                  OcaUint8
             PortsPerColumn                               number                                  OcaUint8
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, X, Y, xSize, ySize, Members, Proxy, PortsPerRow and PortsPerColumn.

.. js:autoclass:: OcaMatrix(objectNumber, device)
  :members:
