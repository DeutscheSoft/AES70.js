OcaCodingManager
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaCodingManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
        AvailableEncodingSchemes                   Map<number, string>            OcaMap<OcaMediaCodingSchemeID, OcaString>
        AvailableDecodingSchemes                   Map<number, string>            OcaMap<OcaMediaCodingSchemeID, OcaString>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, AvailableEncodingSchemes and AvailableDecodingSchemes.

.. js:autoclass:: OcaCodingManager(objectNumber, device)
  :members:
