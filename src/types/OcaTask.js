/*
 * This file has been generated.
 */

/**
 * <font color="#223274">An execution thread that runs an AES70 Program.
 * Programs are OcaLibrary volumes that contain application-specific
 * execution instructions.</font>
 */
export class OcaTask {
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
     * @member RemoteControlClasses.OcaTask#OnIDChanged {PropertyEvent<OcaTaskID>} - This event is emitted when ID changes in the remote object.
     */
    this.ID = ID;
    /**
     * This was not documented in the OCA standard.
     * @member RemoteControlClasses.OcaTask#OnLabelChanged {PropertyEvent<string>} - This event is emitted when Label changes in the remote object.
     */
    this.Label = Label;
    /**
     * ID of program this task was given or null if it's idle.
     * @member RemoteControlClasses.OcaTask#OnProgramIDChanged {PropertyEvent<OcaLibVolIdentifier>} - This event is emitted when ProgramID changes in the remote object.
     */
    this.ProgramID = ProgramID;
    /**
     * ID of group the task is in, or zero if it isn't in a group
     * @member RemoteControlClasses.OcaTask#OnGroupIDChanged {PropertyEvent<OcaTaskGroupID>} - This event is emitted when GroupID changes in the remote object.
     */
    this.GroupID = GroupID;
    /**
     * Absolute or Relative time.
     * @member RemoteControlClasses.OcaTask#OnTimeModeChanged {PropertyEvent<OcaTimeMode>} - This event is emitted when TimeMode changes in the remote object.
     */
    this.TimeMode = TimeMode;
    /**
     * ONo of relevant <b>OcaTimeSource </b>object or zero to use device time
     * (see <b>OcaDeviceTimeManager</b>).
     * @member RemoteControlClasses.OcaTask#OnTimeSourceONoChanged {PropertyEvent<OcaONo>} - This event is emitted when TimeSourceONo changes in the remote object.
     */
    this.TimeSourceONo = TimeSourceONo;
    /**
     * Time at which to start task, or zero if task will be manually started.
     * If <b>TimeMode=Relative</b>, the actual event start time equals the
     * value of <b>StartTime</b> plus the absolute time that <b>StartTime</b>
     * was most recently set. Datatype shall depend on value of
     * <b>TimeUnits</b>: - If <b>TimeUnits </b>is seconds, datatype shall be
     * <b>OcaTimePTP;</b> - If TimeUnits is samples, datatype shall be
     * <b>OcaUint64</b>. If <b>TimeMode=Absolute</b>, the actual event start
     * time equals the value of <b>StartTime</b>
     * @member RemoteControlClasses.OcaTask#OnStartTimeChanged {PropertyEvent<OcaTimePTP>} - This event is emitted when StartTime changes in the remote object.
     */
    this.StartTime = StartTime;
    /**
     * Duration of task execution, or zero to run until complete or
     * explicitly stopped.
     * @member RemoteControlClasses.OcaTask#OnDurationChanged {PropertyEvent<OcaTimePTP>} - This event is emitted when Duration changes in the remote object.
     */
    this.Duration = Duration;
    /**
     * Arbitrary application-specific parameters for the Task and its
     * Program.
     * @member RemoteControlClasses.OcaTask#OnApplicationSpecificParametersChanged {PropertyEvent<string>} - This event is emitted when ApplicationSpecificParameters changes in the remote object.
     */
    this.ApplicationSpecificParameters = ApplicationSpecificParameters;
  }
}
