OcaGrouper
==========

A online version of the AES70 specification of this class can be found at
`http://docs.deuso.de <http://docs.deuso.de/AES70-OCC/Control%20Classes/OcaGrouper.html>`_.

The class is a subclass of :class:`OcaAgent`.

This class defines the properties

======================================== ======================================== ========================================
                  Name                               JavaScript Type                             AES70 Type
======================================== ======================================== ========================================
            ActuatorOrSensor                             boolean                                 OcaBoolean
                 Groups                             OcaGrouperGroup[]                     OcaList<OcaGrouperGroup>
                Citizens                           OcaGrouperCitizen[]                   OcaList<OcaGrouperCitizen>
              Enrollments                         OcaGrouperEnrollment[]               OcaList<OcaGrouperEnrollment>
                  Mode                                OcaGrouperMode                           OcaGrouperMode
======================================== ======================================== ========================================

Furthermore, it inherits the properties ClassID, ClassVersion, ObjectNumber, Lockable, Role, Label, Owner, ActuatorOrSensor, Groups, Citizens, Enrollments and Mode.

.. js:autoclass:: OcaGrouper(objectNumber, device)
  :members:
