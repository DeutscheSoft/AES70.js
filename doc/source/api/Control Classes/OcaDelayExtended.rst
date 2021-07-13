OcaDelayExtended
================

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaDelayExtended.html>`_.

The class is a subclass of :class:`OcaDelay`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
               DelayValue                             OcaDelayValue                            OcaDelayValue
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Enabled, Ports, Label, Owner, Latency, DelayTime and DelayValue.

.. js:autoclass:: OcaDelayExtended(objectNumber, device)
  :members:
