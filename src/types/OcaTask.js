/*
 * This file has been generated.
 */

export class OcaTask {
  /**
   * An execution thread that runs an AES70 Program. Programs are OcaLibrary
   * volumes that contain application-specific execution instructions. **
   * Deprecated** in OCA 1.5.
   * @class OcaTask
   */
  constructor(
    ID,
    Label,
    ProgramID,
    GroupID,
    TimeMode,
    TimeSourceONo,
    StartTime,
    Duration,
    ApplicationSpecificParameters
  ) {
    /**
     * Task ID - assigned by OcaTaskManager
     * @type number
     */
    this.ID = ID;
    /**
     * @type string
     */
    this.Label = Label;
    /**
     * ID of program this task was given or all null if it's idle.
     * @type OcaLibVolIdentifier
     */
    this.ProgramID = ProgramID;
    /**
     * ID of group the task is in, or zero if it isn't in a group
     * @type number
     */
    this.GroupID = GroupID;
    /**
     * Absolute or Relative time.
     * @type OcaTimeMode
     */
    this.TimeMode = TimeMode;
    /**
     * ONo of relevant OcaTimeSource object, or zero if none.
     * @type number
     */
    this.TimeSourceONo = TimeSourceONo;
    /**
     * Time at which to start task, or zero if task will be manually started. If
     * **TimeMode=Relative**, the actual event start time equals the value of
     * **StartTime** plus the absolute time that **StartTime** was most recently
     * set. Datatype shall depend on value of **TimeUnits**: - If **TimeUnits**
     * is seconds, datatype shall be **OcaTime;** - If TimeUnits is samples,
     * datatype shall be **OcaUint64**. If **TimeMode=Absolute**, the actual
     * event start time equals the value of **StartTime**
     * @type OcaTime
     */
    this.StartTime = StartTime;
    /**
     * Duration of task execution, or zero to run until complete or explicitly
     * stopped.
     * @type number
     */
    this.Duration = Duration;
    /**
     * Arbitrary application-specific parameters for the Task and its Program.
     * @type Uint8Array
     */
    this.ApplicationSpecificParameters = ApplicationSpecificParameters;
  }
}
