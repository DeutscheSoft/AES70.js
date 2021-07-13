OcaNetwork
==========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaNetwork.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                LinkType                            OcaNetworkLinkType                       OcaNetworkLinkType
              IDAdvertised                              Uint8Array                     OcaApplicationNetworkServiceID
            ControlProtocol                     OcaNetworkControlProtocol                OcaNetworkControlProtocol
             MediaProtocol                       OcaNetworkMediaProtocol                  OcaNetworkMediaProtocol
                 Status                              OcaNetworkStatus                         OcaNetworkStatus
            SystemInterfaces                  OcaNetworkSystemInterfaceID[]         OcaList<OcaNetworkSystemInterfaceID>
               MediaPorts                                number[]                             OcaList<OcaONo>
               Statistics                          OcaNetworkStatistics                     OcaNetworkStatistics
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, LinkType, IDAdvertised, ControlProtocol, MediaProtocol, Status, SystemInterfaces, MediaPorts and Statistics.

.. js:autoclass:: OcaNetwork(objectNumber, device)
  :members:
