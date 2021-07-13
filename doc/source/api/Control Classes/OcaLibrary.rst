OcaLibrary
==========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaLibrary.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               VolumeType                             OcaLibVolType                            OcaLibVolType
                 Access                                OcaLibAccess                             OcaLibAccess
                Volumes                           Map<number, OcaLibVol>               OcaMap<OcaLibVolID, OcaLibVol>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, VolumeType, Access and Volumes.

.. js:autoclass:: OcaLibrary(objectNumber, device)
  :members:
