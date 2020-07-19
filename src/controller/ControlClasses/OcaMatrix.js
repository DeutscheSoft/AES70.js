import { make_control_class } from '../Base.js';
import { OcaWorker } from './OcaWorker.js';
import { OcaList2D } from '../../OCP1/OcaList2D.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';

/**
 * A matrix is a rectangular array of identical objects
 * ("<b>members</b>") that is coordinate addressable and has sets of
 * common input and output ports. The matrix host does not instantiate
 * these objects, but instead mediates the coordinate addressing,
 * implements the common input and output ports, and provdes certain
 * other aggregate functions. Matrix members may be workers (including
 * blocks), or agents. All members of a matrix must be of the same class.
 * No object may belong to more than one matrix at a time. No object may
 * appear more than once in a given matrix. The complete model of an OCA
 * matrix consists of: 1. One instance of <font
 * color="#00006c"><b>OcaMatrix.</b></font> 2. <b>(N x M) members</b>,
 * where each member is an instance of a worker or agent class. For any
 * given matrix, this class must be the same for all members, and is
 * referred to as the <b>member class.</b> Members are sometimes referred
 * to as <b>cells</b> of the matrix. 3. One additional instance of the
 * member class, called the <b>matrix proxy.</b> Thus, the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance is a container for
 * the two-dimensional collection of its members. Once a matrix is set
 * up, the controller may get and set member properties by the following
 * procedures: <b>Get</b> To get a property value of member
 * (x<sub>1</sub>, y<sub>1</sub>): 1. Controller calls <font
 * color="#00006c"><b>OcaMatrix.SetXY(x1, y1)</b></font>. This action: -
 * locks the <font color="#00006c"><b>OcaMatrix</b></font> instance, and
 * - posts x<sub>1</sub> and y<sub>1</sub> as coordinates of the object
 * whose property value is to be retrieved. 2. Controller calls the
 * matrix proxy's <font color="#00006c"><b>Get</b></font> method for the
 * property value desired. This action causes the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance to: - decode the
 * posted x<sub>1</sub> and y<sub>1</sub> values into a member ONo. -
 * call the given <font color="#00006c"><b>Get</b></font> method for the
 * object identified by the decoded ONo. - aggregate the <font
 * color="#00006c"><b>OcaResult</b></font> from each <font
 * color="#00006c"><b>Get</b></font> call into a consolidated <font
 * color="#00006c"><b>OcaResult</b></font>. - unlock the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance. - return the
 * consolidated <font color="#00006c"><b>OcaResult</b></font> to the
 * controller. <b>Set</b> <b> </b>To set a property value of member
 * (x<sub>1</sub>, y<sub>1</sub>), or of row (0, y<sub>1</sub>) or column
 * (x<sub>1</sub>, 0) or whole matrix (0,0) 1. Controller calls <font
 * color="#00006c"><b>OcaMatrix.SetXY(x1, y1)</b></font>. This action: -
 * locks the <font color="#00006c"><b>OcaMatrix</b></font> instance, and
 * - posts x<sub>1</sub> and y<sub>1</sub> as coordinates of the object
 * whose property value is to be changed. 2. Controller calls the matrix
 * proxy's <font color="#00006c"><b>Set</b></font> method for the target
 * property. This action causes the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance to: - decode the
 * posted x<sub>1</sub> and y<sub>1</sub> values into a list of target
 * member ONos, as follows: If x<sub>1</sub> &gt; 0 and y<sub>1</sub>
 * &gt; 0, the list will be the single ONo of the addressed cell. If
 * x<sub>1</sub> = 0 and y<sub>1</sub> &gt; 0, the list will be the list
 * of ONos of the cells in row y<sub>1</sub> . If x<sub>1</sub> &gt; 0
 * and y<sub>1</sub> = 0, the list will be the list of ONos of the cells
 * in column x<sub>1</sub>. If x<sub>1</sub> = 0 and y<sub>1</sub> = 0,
 * the list will be the list of ONos of all cells of the matrix. - call
 * the given <font color="#00006c"><b>Set</b></font> method for each
 * target member in the ONo list. - aggregate the <font
 * color="#00006c"><b>OcaResult</b></font> from each <font
 * color="#00006c"><b>Set</b></font> call into a consolidated <font
 * color="#00006c"><b>OcaResult</b></font>. - unlock the <font
 * color="#00006c"><b>OcaMatrix</b></font> instance.
 * @extends RemoteControlClasses.OcaWorker
 * @class OcaMatrix
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaMatrix = make_control_class(
  'OcaMatrix',
  3,
  '\u0001\u0001\u0005',
  2,
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
  ],
  [
    ['X', [OcaUint16], 3, 1, false, false, null],
    ['Y', [OcaUint16], 3, 2, false, false, null],
    ['xSize', [OcaUint16], 3, 3, false, false, null],
    ['ySize', [OcaUint16], 3, 4, false, false, null],
    ['Members', [OcaList2D(OcaUint32)], 3, 5, false, false, null],
    ['Proxy', [OcaUint32], 3, 6, false, false, null],
    ['PortsPerRow', [OcaUint8], 3, 7, false, false, null],
    ['PortsPerColumn', [OcaUint8], 3, 8, false, false, null],
  ],
  []
);

/**
 * Gets coordinates of the currently active area (cell, row, column, or
 * whole matrix). The returned status indicates whether the operation was
 * successful.
 * @method RemoteControlClasses.OcaMatrix#GetCurrentXY
 * @returns {Promise<Arguments<OcaMatrixCoordinate,OcaMatrixCoordinate>>}
 */
/**
 * Sets the currently active area (cell, row, column, or whole matrix).
 * The returned status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaMatrix#SetCurrentXY
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @returns {Promise}
 */
/**
 * Gets the matrix size. The returned status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaMatrix#GetSize
 * @returns {Promise<Arguments<OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate,OcaMatrixCoordinate>>}
 */
/**
 * Sets the matrix size. The returned status indicates whether the
 * operation was successful. This method will not be available for
 * fixed-size matrices.
 * @method RemoteControlClasses.OcaMatrix#SetSize
 * @param xSize {OcaMatrixCoordinate}
 *
 * @param ySize {OcaMatrixCoordinate}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the 2D array of member object numbers. Cells for which no
 * member has been defined will return Zero as the object number.
 * @method RemoteControlClasses.OcaMatrix#GetMembers
 * @returns {Promise<OcaList2D>}
 */
/**
 * Sets the entire 2D array of member object numbers. Row and column size
 * of the <b>members</b> parameter must be equal to the current size of
 * the matrix.
 * @method RemoteControlClasses.OcaMatrix#SetMembers
 * @param members {OcaList2D}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the object number of the member at position (x,y). If no
 * member is defined at this position, returns an object number value of
 * Zero.
 * @method RemoteControlClasses.OcaMatrix#GetMember
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @returns {Promise<OcaONo>}
 */
/**
 * Installs a particular object as a member at position (x,y). If another
 * object was at this position, it is removed.
 * @method RemoteControlClasses.OcaMatrix#SetMember
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @param memberONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the object number of the matrix proxy.
 * @method RemoteControlClasses.OcaMatrix#GetProxy
 * @returns {Promise<OcaONo>}
 */
/**
 * Sets the object number of the matrix proxy.
 * @method RemoteControlClasses.OcaMatrix#SetProxy
 * @param ONo {OcaONo}
 *
 * @returns {Promise}
 */
/**
 * Gets the number of ports per row. These are input ports.
 * @method RemoteControlClasses.OcaMatrix#GetPortsPerRow
 * @returns {Promise<OcaUint8>}
 */
/**
 * Sets the number of ports per row. These must be input ports.
 * @method RemoteControlClasses.OcaMatrix#SetPortsPerRow
 * @param Ports {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Gets the number of ports per output channel. These are output ports.
 * @method RemoteControlClasses.OcaMatrix#GetPortsPerColumn
 * @returns {Promise<OcaUint8>}
 */
/**
 * Sets the number of ports per column. These must be output ports.
 * @method RemoteControlClasses.OcaMatrix#SetPortsPerColumn
 * @param Ports {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Sets the currently active area (cell, row, column, or whole matrix)
 * and locks it. Fails if the referenced members cannot all be locked.
 * The returned status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaMatrix#SetCurrentXYLock
 * @param x {OcaMatrixCoordinate}
 *
 * @param y {OcaMatrixCoordinate}
 *
 * @returns {Promise}
 */
/**
 * Unlocks the currently active area of the matrix. Fails if all the
 * members of the currently active area cannot be unlocked. Failure is
 * <u>not </u>triggered if one or more members of the currently active
 * area are already unlocked at the time Unlock() is called. The returned
 * status indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaMatrix#UnlockCurrent
 * @returns {Promise}
 */
/**
 * Active column index. The active column is the column to which matrix
 * proxy method calls will be reflected. Value is zero-relative, i.e. the
 * first column is number zero. A value of 65535 means all columns in the
 * matrix.
 * @member RemoteControlClasses.OcaMatrix#OnXChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when X changes in the remote object.
 */
/**
 * Active row index. The active row is the row to which matrix proxy
 * changes will be reflected. Value is zero-relative, i.e. the first row
 * is number zero. A value of 65535 means all rows in the matrix.
 * @member RemoteControlClasses.OcaMatrix#OnYChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when Y changes in the remote object.
 */
/**
 * Number of columns in the matrix. Readonly in some cases.
 * @member RemoteControlClasses.OcaMatrix#OnxSizeChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when xSize changes in the remote object.
 */
/**
 * Number of rows in the matrix. Readonly in some cases.
 * @member RemoteControlClasses.OcaMatrix#OnySizeChanged {PropertyEvent<OcaMatrixCoordinate>} - This event is emitted when ySize changes in the remote object.
 */
/**
 * 2D array of member object numbers.
 * @member RemoteControlClasses.OcaMatrix#OnMembersChanged {PropertyEvent<OcaList2D>} - This event is emitted when Members changes in the remote object.
 */
/**
 * Object number of the matrix proxy.
 * @member RemoteControlClasses.OcaMatrix#OnProxyChanged {PropertyEvent<OcaONo>} - This event is emitted when Proxy changes in the remote object.
 */
/**
 * Number of input ports per row- e.g. for a stereo matrix, the value
 * would be 2.
 * @member RemoteControlClasses.OcaMatrix#OnPortsPerRowChanged {PropertyEvent<OcaUint8>} - This event is emitted when PortsPerRow changes in the remote object.
 */
/**
 * Number of output ports per column - e.g. for a stereo matrix, the
 * value would be 2.
 * @member RemoteControlClasses.OcaMatrix#OnPortsPerColumnChanged {PropertyEvent<OcaUint8>} - This event is emitted when PortsPerColumn changes in the remote object.
 */
