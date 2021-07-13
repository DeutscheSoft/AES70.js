OcaPhysicalPosition
===================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaPhysicalPosition.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
            CoordinateSystem                   OcaPositionCoordinateSystem              OcaPositionCoordinateSystem
      PositionDescriptorFieldFlags                         int                        OcaPositionDescriptorFieldFlags
           PositionDescriptor                     OcaPositionDescriptor                    OcaPositionDescriptor
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, CoordinateSystem, PositionDescriptorFieldFlags and PositionDescriptor.

.. js:autoclass:: OcaPhysicalPosition(objectNumber, device)
  :members:
