import { RemoteDevice } from '../remote_device';
import { OcaWorker } from './OcaWorker';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../Base';

/**
 * A matrix is a rectangular array of identical objects (" **members** ") that is coordinate addressable and has sets of common input and output ports. The matrix host does not instantiate these objects, but instead mediates the coordinate addressing, implements the common input and output ports, and provdes certain other aggregate functions. Matrix members may be workers (including blocks), or agents. All members of a matrix must be of the same class. No object may belong to more than one matrix at a time. No object may appear more than once in a given matrix. The complete model of an OCA matrix consists of: 1. One instance of  **OcaMatrix.**  2.  **(N x M) members** , where each member is an instance of a worker or agent class. For any given matrix, this class must be the same for all members, and is referred to as the  **member class.**  Members are sometimes referred to as  **cells**  of the matrix. 3. One additional instance of the member class, called the  **matrix proxy.**  Thus, the  **OcaMatrix**  instance is a container for the two-dimensional collection of its members. Once a matrix is set up, the controller may get and set member properties by the following procedures:  **Get**  To get a property value of member (x1, y1): 1. Controller calls  **OcaMatrix.SetXY(x1, y1)** . This action: - locks the  **OcaMatrix**  instance, and - posts x1 and y1 as coordinates of the object whose property value is to be retrieved. 2. Controller calls the matrix proxy's  **Get**  method for the property value desired. This action causes the  **OcaMatrix**  instance to: - decode the posted x1 and y1 values into a member ONo. - call the given  **Get**  method for the object identified by the decoded ONo. - aggregate the  **OcaResult**  from each  **Get**  call into a consolidated  **OcaResult** . - unlock the  **OcaMatrix**  instance. - return the consolidated  **OcaResult**  to the controller.  **Set**  To set a property value of member (x1, y1), or of row (0, y1) or column (x1, 0) or whole matrix (0,0) 1. Controller calls  **OcaMatrix.SetXY(x1, y1)** . This action: - locks the  **OcaMatrix**  instance, and - posts x1 and y1 as coordinates of the object whose property value is to be changed. 2. Controller calls the matrix proxy's  **Set**  method for the target property. This action causes the  **OcaMatrix**  instance to: - decode the posted x1 and y1 values into a list of target member ONos, as follows: If x1 :raw:html:`&gt;` 0 and y1 :raw:html:`&gt;` 0, the list will be the single ONo of the addressed cell. If x1 = 0 and y1 :raw:html:`&gt;` 0, the list will be the list of ONos of the cells in row y1 . If x1 :raw:html:`&gt;` 0 and y1 = 0, the list will be the list of ONos of the cells in column x1. If x1 = 0 and y1 = 0, the list will be the list of ONos of all cells of the matrix. - call the given  **Set**  method for each target member in the ONo list. - aggregate the  **OcaResult**  from each  **Set**  call into a consolidated  **OcaResult** . - unlock the  **OcaMatrix**  instance.
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

  /**
   * This event is emitted whenever PortsPerRow changes.
   */
  OnPortsPerRowChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever PortsPerColumn changes.
   */
  OnPortsPerColumnChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets coordinates of the currently active area (cell, row, column, or whole matrix). The returned status indicates whether the operation was successful.
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
   * Sets the currently active area (cell, row, column, or whole matrix). The returned status indicates whether the operation was successful.
   *
   * @method OcaMatrix#SetCurrentXY
   * @param {number} x
   *
   * @param {number} y
   *
   * @returns {Promise<void>}
   */
  SetCurrentXY(x: number, y: number): Promise<void>;

  /**
   * Gets the matrix size. The returned status indicates whether the operation was successful.
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
   * Sets the matrix size. The returned status indicates whether the operation was successful. This method will not be available for fixed-size matrices.
   *
   * @method OcaMatrix#SetSize
   * @param {number} xSize
   *
   * @param {number} ySize
   *
   * @returns {Promise<void>}
   */
  SetSize(xSize: number, ySize: number): Promise<void>;

  /**
   * Retrieves the 2D array of member object numbers. Cells for which no member has been defined will return Zero as the object number.
   *
   * @method OcaMatrix#GetMembers
   * @returns {Promise<number[][]>}
   *   A promise which resolves to a single value of type ``number[][]``.
   */
  GetMembers(): Promise<number[][]>;

  /**
   * Sets the entire 2D array of member object numbers. Row and column size of the  **members**  parameter must be equal to the current size of the matrix.
   *
   * @method OcaMatrix#SetMembers
   * @param {number[][]} members
   *
   * @returns {Promise<void>}
   */
  SetMembers(members: number[][]): Promise<void>;

  /**
   * Retrieves the object number of the member at position (x,y). If no member is defined at this position, returns an object number value of Zero.
   *
   * @method OcaMatrix#GetMember
   * @param {number} x
   *
   * @param {number} y
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMember(x: number, y: number): Promise<number>;

  /**
   * Installs a particular object as a member at position (x,y). If another object was at this position, it is removed.
   *
   * @method OcaMatrix#SetMember
   * @param {number} x
   *
   * @param {number} y
   *
   * @param {number} memberONo
   *
   * @returns {Promise<void>}
   */
  SetMember(x: number, y: number, memberONo: number): Promise<void>;

  /**
   * Gets the object number of the matrix proxy.
   *
   * @method OcaMatrix#GetProxy
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetProxy(): Promise<number>;

  /**
   * Sets the object number of the matrix proxy.
   *
   * @method OcaMatrix#SetProxy
   * @param {number} ONo
   *
   * @returns {Promise<void>}
   */
  SetProxy(ONo: number): Promise<void>;

  /**
   * Gets the number of ports per row. These are input ports.
   *
   * @method OcaMatrix#GetPortsPerRow
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPortsPerRow(): Promise<number>;

  /**
   * Sets the number of ports per row. These must be input ports.
   *
   * @method OcaMatrix#SetPortsPerRow
   * @param {number} Ports
   *
   * @returns {Promise<void>}
   */
  SetPortsPerRow(Ports: number): Promise<void>;

  /**
   * Gets the number of ports per output channel. These are output ports.
   *
   * @method OcaMatrix#GetPortsPerColumn
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetPortsPerColumn(): Promise<number>;

  /**
   * Sets the number of ports per column. These must be output ports.
   *
   * @method OcaMatrix#SetPortsPerColumn
   * @param {number} Ports
   *
   * @returns {Promise<void>}
   */
  SetPortsPerColumn(Ports: number): Promise<void>;

  /**
   * Sets the currently active area (cell, row, column, or whole matrix) and locks it. Fails if the referenced members cannot all be locked. The returned status indicates whether the operation was successful.
   *
   * @method OcaMatrix#SetCurrentXYLock
   * @param {number} x
   *
   * @param {number} y
   *
   * @returns {Promise<void>}
   */
  SetCurrentXYLock(x: number, y: number): Promise<void>;

  /**
   * Unlocks the currently active area of the matrix. Fails if all the members of the currently active area cannot be unlocked. Failure is  _not_ triggered if one or more members of the currently active area are already unlocked at the time Unlock() is called. The returned status indicates whether the operation was successful.
   *
   * @method OcaMatrix#UnlockCurrent
   * @returns {Promise<void>}
   */
  UnlockCurrent(): Promise<void>;
}
