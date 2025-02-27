import { OcaCommandResult } from '../../OCP1/OcaCommandResult.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaList2D } from '../../OCP1/OcaList2D.js';
import { OcaList32 } from '../../OCP1/OcaList32.js';
import { OcaLongBlob } from '../../OCP1/OcaLongBlob.js';
import { OcaMatrixCommand } from '../../OCP1/OcaMatrixCommand.js';
import { OcaMatrixCoordinates } from '../../OCP1/OcaMatrixCoordinates.js';
import { OcaMethodID } from '../../OCP1/OcaMethodID.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';
import { make_control_class } from '../make_control_class.js';
import { OcaWorker } from './OcaWorker.js';

/**
 * Rectangular array of identical objects (**Matrix Members,** or just****
 * **Members** in context) that is coordinate addressable and has sets of common
 * input and output ports. An **OcaMatrix** instance is a container for a
 * two-dimensional collection of members. Matrix members may be workers
 * (including blocks or other matrices), or agents. All members of a given
 * matrix shall be of the same class (*the* **member class**). No object shall
 * belong to more than one matrix at a time. No object shall appear more than
 * once in a given matrix. The **OcaMatrix** object shall not instantiate the
 * Members, but instead shall provide the coordinate addressing, implement the
 * common input and output ports, and provide certain other aggregate functions.
 * The term M**atrix** means an **OcaMatrix** object *plus* the ancillary
 * objects that collectively provide matrixing functionality. Specifically, a
 * Matrix shall consists of: 1. One instance of the **OcaMatrix** class (the
 * **matrix object**); and 2. **(N x M) members**, where each member shall be an
 * instance of the member class; and The normative specification of the
 * **OcaMatrix** class is here. The normative specification of the overall
 * Matrix mechanism, with informative examples, is in [AES70-1(Matrices)].
 * @extends OcaWorker
 * @class OcaMatrix
 */
export const OcaMatrix = make_control_class(
  'OcaMatrix',
  3,
  '\u0001\u0001\u0005',
  4,
  OcaWorker,
  [
    ['GetCurrentXY', 3, 1, [], [OcaUint16, OcaUint16]],
    ['SetCurrentXY', 3, 2, [OcaUint16, OcaUint16], []],
    [
      'GetSize',
      3,
      3,
      [],
      [OcaUint16, OcaUint16, OcaUint16, OcaUint16, OcaUint16, OcaUint16],
    ],
    ['SetSize', 3, 4, [OcaUint16, OcaUint16], []],
    ['GetMembers', 3, 5, [], [OcaList2D(OcaUint32)]],
    ['SetMembers', 3, 6, [OcaList2D(OcaUint32)], []],
    ['GetMember', 3, 7, [OcaUint16, OcaUint16], [OcaUint32]],
    ['SetMember', 3, 8, [OcaUint16, OcaUint16, OcaUint32], []],
    ['GetProxy', 3, 9, [], [OcaUint32]],
    ['SetProxy', 3, 10, [OcaUint32], []],
    ['GetPortsPerRow', 3, 11, [], [OcaUint8]],
    ['SetPortsPerRow', 3, 12, [OcaUint8], []],
    ['GetPortsPerColumn', 3, 13, [], [OcaUint8]],
    ['SetPortsPerColumn', 3, 14, [OcaUint8], []],
    ['SetCurrentXYLock', 3, 15, [OcaUint16, OcaUint16], []],
    ['UnlockCurrent', 3, 16, [], []],
    [
      'ExecuteMethod',
      3,
      17,
      [OcaList32(OcaMatrixCoordinates), OcaMethodID, OcaList(OcaLongBlob)],
      [OcaList(OcaCommandResult)],
    ],
    [
      'ExecuteCommands',
      3,
      18,
      [OcaList32(OcaMatrixCommand)],
      [OcaList32(OcaCommandResult)],
    ],
  ],
  [
    ['X', [OcaUint16], 3, 1, false, false, null],
    ['Y', [OcaUint16], 3, 2, false, false, null],
    ['xSize', [OcaUint16], 3, 3, false, false, null],
    ['ySize', [OcaUint16], 3, 4, false, false, null],
    ['Members', [OcaList2D(OcaUint32)], 3, 5, false, false, null],
    ['Proxy', [OcaUint32], 3, 6, false, false, null],
  ],
  []
);

/**
 * Gets coordinates of the currently active area (cell, row, column, or whole
 * matrix). See the definitions of the properties **X** and **Y** for
 * specification of X and Y values.
 * The return values of this method are
 *
 * - x of type ``number``
 * - y of type ``number``
 *
 * @method OcaMatrix#GetCurrentXY
 * @returns {Promise<Arguments<number,number>>}
 */
/**
 * Sets the currently active area (cell, row, column, or whole matrix).
 * Automatically locks the **OcaMatrix** object and the Matrix Proxy object.
 * Does not lock the addressed matrix Members. Locks shall persist until any
 * matrix proxy method is called in the same Control Session. See the
 * definitions of the properties **X** and **Y** for specification of X and Y
 * values.
 *
 * @method OcaMatrix#SetCurrentXY
 * @param {number} x
 * @param {number} y
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the matrix size.
 * The return values of this method are
 *
 * - xSize of type ``number``
 * - ySize of type ``number``
 * - minXSize of type ``number``
 * - maxXSize of type ``number``
 * - minYSize of type ``number``
 * - maxYSize of type ``number``
 *
 * @method OcaMatrix#GetSize
 * @returns {Promise<Arguments<number,number,number,number,number,number>>}
 */
/**
 * Sets the matrix size. This method will not be available for fixed-size
 * matrices.
 *
 * @method OcaMatrix#SetSize
 * @param {number} xSize
 * @param {number} ySize
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves the 2D array of Member ONos. Cells for which no Member has been
 * provided will contain the value zero.
 *
 * @method OcaMatrix#GetMembers
 * @returns {Promise<number[][]>}
 *   A promise which resolves to a single value of type ``number[][]``.
 */
/**
 * Sets the entire 2D array of Member Object Numbers. Row and column dimensions
 * of the M**embers** parameter shall be equal to the current row and column
 * counts of the Matrix. In the list, a Member Object Number value of zero shall
 * remove any Member at the given position.
 *
 * @method OcaMatrix#SetMembers
 * @param {number[][]} members
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves the object number of the Member at position (x,y). If no Member is
 * defined at this position, shall return the value zero.
 *
 * @method OcaMatrix#GetMember
 * @param {number} x
 * @param {number} y
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Installs a particular object as a Member at position (x,y). If another object
 * is already at this position, it is replaced. If value of the **memberONo**
 * parameter is zero, any object already at this position is removed and not
 * replaced.
 *
 * @method OcaMatrix#SetMember
 * @param {number} x
 * @param {number} y
 * @param {number} memberONo
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the object number of the Matrix Proxy.
 *
 * @method OcaMatrix#GetProxy
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the object number of the Matrix Proxy.
 *
 * @method OcaMatrix#SetProxy
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the number of Ports per row. Note: these are Input Ports.
 *
 * @method OcaMatrix#GetPortsPerRow
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the number of Ports per row. These shall be Input Ports.
 *
 * @method OcaMatrix#SetPortsPerRow
 * @param {number} Ports
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the number of Ports per column. Note: these are Output Ports.
 *
 * @method OcaMatrix#GetPortsPerColumn
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the number of Ports per column. These shall be Output Ports.
 *
 * @method OcaMatrix#SetPortsPerColumn
 * @param {number} Ports
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the currently active area (cell, row, column, or whole matrix), locks
 * the **OcaMatrix** object, locks the Matrix Proxy object, and locks all the
 * Members in the active area. Fails if the referenced members cannot all be
 * locked. The **OcaMatrix** and Matrix Proxy locks shall persist until any
 * Matrix Proxy method is called in the same Control Session. The Member locks
 * shall persist until unlocked by calls to their **Unlock()** methods or by a
 * call to the **OcaMatrix** method **UnlockCurrent**. The returned status
 * indicates whether the operation was successful. See the definitions of the
 * properties **X** and **Y** for specification of X and Y values.
 *
 * @method OcaMatrix#SetCurrentXYLock
 * @param {number} x
 * @param {number} y
 *
 * @returns {Promise<void>}
 */
/**
 * Unlocks the Member objects in the currently active area of the Matrix.
 * Succeeds only if all the Members of the currently active area can be
 * unlocked. Failure shall not be**** triggered if one or more Members of the
 * currently active area are already unlocked. The returned status indicates
 * whether the operation was successful.
 *
 * @method OcaMatrix#UnlockCurrent
 * @returns {Promise<void>}
 */
/**
 * Execute the same method in various Matrix Members with a common set of input
 * parameters. Return the status and returned parameter values from each call.
 * When an addressed Member is a Block, this method shall not be capable of
 * executing methods of objects inside the Block. The **OcaStatus** value
 * returned by this** ExecuteMethods(...)** method shall be as follows: **OK **
 * Requested methods were called; all, none, or some of them succeeded.
 * **<anything else>** Problem, no method calls were attempted
 *
 * @method OcaMatrix#ExecuteMethod
 * @param {IOcaMatrixCoordinates[]} TargetMembers
 * @param {IOcaMethodID} TargetMethod
 * @param {Uint8Array[]} InData
 *
 * @returns {Promise<OcaCommandResult[]>}
 *   A promise which resolves to a single value of type :class:`OcaCommandResult[]`.
 */
/**
 * Execute various methods in various Matrix Members with individual parameter
 * sets for each. Return the status and returned parameter values, if any, from
 * each call. When an addressed Member is a Block, this method shall not be
 * capable of executing methods of objects inside the Block. The **OcaStatus**
 * value returned by this** ExecuteMethods(...)** method shall be as follows:
 * **OK ** Requested methods were called; all, none, or some of them succeeded.
 * **<anything else>** Problem, no method calls were attempted
 *
 * @method OcaMatrix#ExecuteCommands
 * @param {IOcaMatrixCommand[]} Commands
 *
 * @returns {Promise<OcaCommandResult[]>}
 *   A promise which resolves to a single value of type :class:`OcaCommandResult[]`.
 */
/**
 * This event is emitted when the property ``X`` changes in the remote object.
 * The property ``X`` is described in the AES70 standard as follows.
 * Active column index. The active column is the column to which matrix proxy
 * method calls will be reflected. Value is zero-relative, i.e. the first column
 * is number zero. A value of 65535 means all columns in the matrix.
 * **Deprecated** in version 4 of this class (AES70-2024).
 *
 * @member {PropertyEvent<number>} OcaMatrix#OnXChanged
 */
/**
 * This event is emitted when the property ``Y`` changes in the remote object.
 * The property ``Y`` is described in the AES70 standard as follows.
 * Active row index. The active row is the row to which matrix proxy changes
 * will be reflected. Value is zero-relative, i.e. the first row is number zero.
 * A value of 65535 means all rows in the matrix. **Deprecated** in version 4 of
 * this class (AES70-2024).
 *
 * @member {PropertyEvent<number>} OcaMatrix#OnYChanged
 */
/**
 * This event is emitted when the property ``xSize`` changes in the remote object.
 * The property ``xSize`` is described in the AES70 standard as follows.
 * Number of columns in the matrix. Readonly in some cases.
 *
 * @member {PropertyEvent<number>} OcaMatrix#OnxSizeChanged
 */
/**
 * This event is emitted when the property ``ySize`` changes in the remote object.
 * The property ``ySize`` is described in the AES70 standard as follows.
 * Number of rows in the matrix. Readonly in some cases.
 *
 * @member {PropertyEvent<number>} OcaMatrix#OnySizeChanged
 */
/**
 * This event is emitted when the property ``Members`` changes in the remote object.
 * The property ``Members`` is described in the AES70 standard as follows.
 * 2D array of Member object numbers. A zero value shall indicate the absence of
 * a Member at the position in question.
 *
 * @member {PropertyEvent<number[][]>} OcaMatrix#OnMembersChanged
 */
/**
 * This event is emitted when the property ``Proxy`` changes in the remote object.
 * The property ``Proxy`` is described in the AES70 standard as follows.
 * Object number of the Matrix Proxy. **Deprecated** in version 4 of this class
 * (AES70-2024).
 *
 * @member {PropertyEvent<number>} OcaMatrix#OnProxyChanged
 */
