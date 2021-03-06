OcaTaskManager
==============

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaTaskManager.html>`_.

The class is a subclass of :class:`OcaManager`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
                 State                             OcaTaskManagerState                      OcaTaskManagerState
                 Tasks                             Map<number, OcaTask>                  OcaMap<OcaTaskID, OcaTask>
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, State and Tasks.

.. js:autoclass:: OcaTaskManager(objectNumber, device)
  :members:
