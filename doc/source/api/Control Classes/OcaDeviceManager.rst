OcaDeviceManager
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDeviceManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               ModelGUID                               OcaModelGUID                             OcaModelGUID
              SerialNumber                                string                                 OcaString
            ModelDescription                       OcaModelDescription                      OcaModelDescription
               DeviceName                                 string                                 OcaString
               OcaVersion                                 number                                 OcaUint16
               DeviceRole                                 string                                 OcaString
           UserInventoryCode                              string                                 OcaString
                Enabled                                  boolean                                 OcaBoolean
                 State                                    number                               OcaDeviceState
                  Busy                                   boolean                                 OcaBoolean
               ResetCause                             OcaResetCause                            OcaResetCause
                Message                                   string                                 OcaString
                Managers                          OcaManagerDescriptor[]               OcaList<OcaManagerDescriptor>
            DeviceRevisionID                              string                                 OcaString
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, ModelGUID, SerialNumber, ModelDescription, DeviceName, OcaVersion, DeviceRole, UserInventoryCode, Enabled, State, Busy, ResetCause, Message, Managers and DeviceRevisionID.

.. js:autoclass:: OcaDeviceManager(objectNumber, device)
  :members:
