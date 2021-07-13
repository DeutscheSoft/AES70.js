OcaLibraryManager
=================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaLibraryManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               Libraries                          OcaLibraryIdentifier[]               OcaList<OcaLibraryIdentifier>
              CurrentPatch                         OcaLibVolIdentifier                      OcaLibVolIdentifier
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Libraries and CurrentPatch.

.. js:autoclass:: OcaLibraryManager(objectNumber, device)
  :members:
