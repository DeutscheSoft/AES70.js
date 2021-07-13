OcaApplicationNetwork
=====================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaApplicationNetwork.html>`_.

The class is a subclass of :class:`OcaRoot`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 Label                                    string                                 OcaString
                 Owner                                    number                                   OcaONo
               ServiceID                                Uint8Array                     OcaApplicationNetworkServiceID
            SystemInterfaces              OcaNetworkSystemInterfaceDescriptor[]   OcaList<OcaNetworkSystemInterfaceDescriptor>
                 State                          OcaApplicationNetworkState               OcaApplicationNetworkState
               ErrorCode                                  number                                 OcaUint16
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, ServiceID, SystemInterfaces, State and ErrorCode.

.. js:autoclass:: OcaApplicationNetwork(objectNumber, device)
  :members:
