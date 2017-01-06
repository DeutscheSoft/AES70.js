/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! True or false
 */
/* typedef int OcaBoolean; */

/*!
 *! Generic 8 bit integer parameter
 */
/* typedef int OcaInt8; */

/*!
 *! Generic integer parameter
 */
/* typedef int OcaInt16; */

/*!
 *! Generic long integer parameter
 */
/* typedef int OcaInt32; */

/*!
 *! Generic long integer parameter
 */
/* typedef number OcaInt64; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint8; */

/*!
 *! General-purpose short index
 */
/* typedef int OcaUint16; */

/* typedef number OcaUint32; */

/* typedef number OcaUint64; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat32; */

/*!
 *! Generic integer parameter
 */
/* typedef float OcaFloat64; */

/*!
 *! General character string, UTF-8 encoded.
 */
/* typedef string OcaString; */

/*!
 *! Representation of a bitmask that is used on the network to send
 *! bitmask data.
 */
/* typedef string OcaBitstring; */

/*!
 *! Representation of a binary large object that is used on the network to
 *! send large chunks of binary data.
 */
/* typedef string OcaBlob; */

/*!
 *! Template class for fixed-length blob.
 */
/* typedef string OcaBlobFixedLen; */

/*!
 *! Template class representing a list of items.
 */
/* typedef array OcaList; */

/*!
 *! Template class representing a two-dimensional list of items. This
 *! class describes only the data, not how it will be marshalled for
 *! transport via the various OCA protocol implementations.
 */
/* typedef array(array) OcaList2D; */

/*!
 *! Template class representing a map of keys to values.
 */
/* typedef mapping OcaMap; */

/*!
 *! Enum that describes all available base datatypes.
 */
OCA.OcaBaseDataType = SP.enum({
    None: 0,
    OcaBoolean: 1,
    OcaInt8: 2,
    OcaInt16: 3,
    OcaInt32: 4,
    OcaInt64: 5,
    OcaUint8: 6,
    OcaUint16: 7,
    OcaUint32: 8,
    OcaUint64: 9,
    OcaFloat32: 10,
    OcaFloat64: 11,
    OcaString: 12,
    OcaBitstring: 13,
    OcaBlob: 14,
    OcaBlobFixedLen: 15,
});




};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
