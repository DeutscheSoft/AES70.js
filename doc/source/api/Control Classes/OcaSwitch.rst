OcaSwitch
=========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaSwitch.html>`_.

The class is a subclass of :class:`OcaActuator`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                Position                                  number                                 OcaUint16
             PositionNames                               string[]                            OcaList<OcaString>
            PositionEnableds                            boolean[]                           OcaList<OcaBoolean>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, Position, PositionNames and PositionEnableds.

.. js:autoclass:: OcaSwitch(objectNumber, device)
  :members:
