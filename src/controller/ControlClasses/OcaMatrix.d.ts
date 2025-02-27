import { OcaCommandResult } from '../../types/OcaCommandResult';
import { IOcaMatrixCommand } from '../../types/OcaMatrixCommand';
import { IOcaMatrixCoordinates } from '../../types/OcaMatrixCoordinates';
import { IOcaMethodID } from '../../types/OcaMethodID';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';

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
export declare class OcaMatrix extends OcaWorker {
  /**
   * This event is emitted whenever X changes.
   */
  OnXChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Y changes.
   */
  OnYChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever xSize changes.
   */
  OnxSizeChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever ySize changes.
   */
  OnySizeChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Members changes.
   */
  OnMembersChanged: PropertyEvent<number[][]>;

  /**
   * This event is emitted whenever Proxy changes.
   */
  OnProxyChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

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
  GetCurrentXY(): Promise<Arguments<[number, number]>>;

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
  SetCurrentXY(x: number, y: number): Promise<void>;

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
  GetSize(): Promise<
    Arguments<[number, number, number, number, number, number]>
  >;

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
  SetSize(xSize: number, ySize: number): Promise<void>;

  /**
   * Retrieves the 2D array of Member ONos. Cells for which no Member has been
   * provided will contain the value zero.
   *
   * @method OcaMatrix#GetMembers
   * @returns {Promise<number[][]>}
   *   A promise which resolves to a single value of type ``number[][]``.
   */
  GetMembers(): Promise<number[][]>;

  /**
   * Sets the entire 2D array of Member Object Numbers. Row and column
   * dimensions of the M**embers** parameter shall be equal to the current row
   * and column counts of the Matrix. In the list, a Member Object Number value
   * of zero shall remove any Member at the given position.
   *
   * @method OcaMatrix#SetMembers
   * @param {number[][]} members
   *
   * @returns {Promise<void>}
   */
  SetMembers(members: number[][]): Promise<void>;

  /**
   * Retrieves the object number of the Member at position (x,y). If no Member
   * is defined at this position, shall return the value zero.
   *
   * @method OcaMatrix#GetMember
   * @param {number} x
   * @param {number} y
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMember(x: number, y: number): Promise<number>;

  /**
   * Installs a particular object as a Member at position (x,y). If another
   * object is already at this position, it is replaced. If value of the
   * **memberONo** parameter is zero, any object already at this position is
   * removed and not replaced.
   *
   * @method OcaMatrix#SetMember
   * @param {number} x
   * @param {number} y
   * @param {number} memberONo
   *
   * @returns {Promise<void>}
   */
  SetMember(x: number, y: number, memberONo: number): Promise<void>;

  /**
   * Gets the object number of the Matrix Proxy.
   *
   * @method OcaMatrix#GetProxy
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetProxy(): Promise<number>;

  /**
   * Sets the object number of the Matrix Proxy.
   *
   * @method OcaMatrix#SetProxy
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  SetProxy(ONo: number): Promise<void>;

  /**
   * Gets the number of Ports per row. Note: these are Input Ports.
   *
   * @method OcaMatrix#GetPortsPerRow
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPortsPerRow(): Promise<number>;

  /**
   * Sets the number of Ports per row. These shall be Input Ports.
   *
   * @method OcaMatrix#SetPortsPerRow
   * @param {number} Ports
   *
   * @returns {Promise<void>}
   */
  SetPortsPerRow(Ports: number): Promise<void>;

  /**
   * Gets the number of Ports per column. Note: these are Output Ports.
   *
   * @method OcaMatrix#GetPortsPerColumn
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPortsPerColumn(): Promise<number>;

  /**
   * Sets the number of Ports per column. These shall be Output Ports.
   *
   * @method OcaMatrix#SetPortsPerColumn
   * @param {number} Ports
   *
   * @returns {Promise<void>}
   */
  SetPortsPerColumn(Ports: number): Promise<void>;

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
  SetCurrentXYLock(x: number, y: number): Promise<void>;

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
  UnlockCurrent(): Promise<void>;

  /**
   * Execute the same method in various Matrix Members with a common set of
   * input parameters. Return the status and returned parameter values from each
   * call. When an addressed Member is a Block, this method shall not be capable
   * of executing methods of objects inside the Block. The **OcaStatus** value
   * returned by this** ExecuteMethods(...)** method shall be as follows: **OK
   * ** Requested methods were called; all, none, or some of them succeeded.
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
  ExecuteMethod(
    TargetMembers: IOcaMatrixCoordinates[],
    TargetMethod: IOcaMethodID,
    InData: Uint8Array[]
  ): Promise<OcaCommandResult[]>;

  /**
   * Execute various methods in various Matrix Members with individual parameter
   * sets for each. Return the status and returned parameter values, if any,
   * from each call. When an addressed Member is a Block, this method shall not
   * be capable of executing methods of objects inside the Block. The
   * **OcaStatus** value returned by this** ExecuteMethods(...)** method shall
   * be as follows: **OK ** Requested methods were called; all, none, or some of
   * them succeeded. **<anything else>** Problem, no method calls were attempted
   *
   * @method OcaMatrix#ExecuteCommands
   * @param {IOcaMatrixCommand[]} Commands
   *
   * @returns {Promise<OcaCommandResult[]>}
   *   A promise which resolves to a single value of type :class:`OcaCommandResult[]`.
   */
  ExecuteCommands(Commands: IOcaMatrixCommand[]): Promise<OcaCommandResult[]>;
}
