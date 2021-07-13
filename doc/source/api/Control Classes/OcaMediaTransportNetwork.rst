OcaMediaTransportNetwork
========================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaMediaTransportNetwork.html>`_.

The class is a subclass of :class:`OcaApplicationNetwork`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Protocol                         OcaNetworkMediaProtocol                  OcaNetworkMediaProtocol
                 Ports                                  OcaPort[]                             OcaList<OcaPort>
          MaxSourceConnectors                             number                                 OcaUint16
           MaxSinkConnectors                              number                                 OcaUint16
          MaxPinsPerConnector                             number                                 OcaUint16
             MaxPortsPerPin                               number                                 OcaUint16
             AlignmentLevel                               number                                  OcaDBFS
             AlignmentGain                                number                                   OcaDB
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, ServiceID, SystemInterfaces, State, ErrorCode, Protocol, Ports, MaxSourceConnectors, MaxSinkConnectors, MaxPinsPerConnector, MaxPortsPerPin, AlignmentLevel, AlignmentGain, SinkConnectors and SourceConnectors.

.. js:autoclass:: OcaMediaTransportNetwork(objectNumber, device)
  :members:
