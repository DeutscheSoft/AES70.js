OcaControlNetwork
=================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaControlNetwork.html>`_.

The class is a subclass of :class:`OcaApplicationNetwork`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Protocol                        OcaNetworkControlProtocol                OcaNetworkControlProtocol
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, ServiceID, SystemInterfaces, State, ErrorCode and Protocol.

.. js:autoclass:: OcaControlNetwork(objectNumber, device)
  :members:
