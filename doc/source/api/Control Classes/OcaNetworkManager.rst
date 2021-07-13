OcaNetworkManager
=================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaNetworkManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Networks                                 number[]                             OcaList<OcaONo>
             StreamNetworks                              number[]                             OcaList<OcaONo>
            ControlNetworks                              number[]                             OcaList<OcaONo>
         MediaTransportNetworks                          number[]                             OcaList<OcaONo>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Networks, StreamNetworks, ControlNetworks and MediaTransportNetworks.

.. js:autoclass:: OcaNetworkManager(objectNumber, device)
  :members:
