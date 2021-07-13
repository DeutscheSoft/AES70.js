OcaDeviceTimeManager
====================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDeviceTimeManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
              TimeSources                                number[]                             OcaList<OcaONo>
        CurrentDeviceTimeSource                           number                                   OcaONo
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, TimeSources, CurrentDeviceTimeSource and DeviceTimePTP.

.. js:autoclass:: OcaDeviceTimeManager(objectNumber, device)
  :members:
