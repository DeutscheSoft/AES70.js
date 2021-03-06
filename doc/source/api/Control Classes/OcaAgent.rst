OcaAgent
========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaAgent.html>`_.

The class is a subclass of :class:`OcaRoot`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 Label                                    string                                 OcaString
                 Owner                                    number                                   OcaONo
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label and Owner.

.. js:autoclass:: OcaAgent(objectNumber, device)
  :members:
