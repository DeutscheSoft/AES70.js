OcaStreamNetwork
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaStreamNetwork.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
            ControlProtocol                     OcaNetworkControlProtocol                OcaNetworkControlProtocol
              IDAdvertised                              Uint8Array                            OcaNetworkNodeID
                LinkType                            OcaNetworkLinkType                       OcaNetworkLinkType
             MediaProtocol                       OcaNetworkMediaProtocol                  OcaNetworkMediaProtocol
           SignalChannelsSink                            number[]                             OcaList<OcaONo>
          SignalChannelsSource                           number[]                             OcaList<OcaONo>
               Statistics                          OcaNetworkStatistics                     OcaNetworkStatistics
                 Status                              OcaNetworkStatus                         OcaNetworkStatus
          StreamConnectorsSink                           number[]                             OcaList<OcaONo>
         StreamConnectorsSource                          number[]                             OcaList<OcaONo>
            SystemInterfaces                  OcaNetworkSystemInterfaceID[]         OcaList<OcaNetworkSystemInterfaceID>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, ControlProtocol, IDAdvertised, LinkType, MediaProtocol, SignalChannelsSink, SignalChannelsSource, Statistics, Status, StreamConnectorsSink, StreamConnectorsSource and SystemInterfaces.

.. js:autoclass:: OcaStreamNetwork(objectNumber, device)
  :members:
