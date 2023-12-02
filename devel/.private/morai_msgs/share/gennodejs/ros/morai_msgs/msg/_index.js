
"use strict";

let IntscnTL = require('./IntscnTL.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let CtrlCmd = require('./CtrlCmd.js');
let Lamps = require('./Lamps.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let SkateboardCtrlCmd = require('./SkateboardCtrlCmd.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let SyncModeAddObject = require('./SyncModeAddObject.js');
let ReplayInfo = require('./ReplayInfo.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let MapSpecIndex = require('./MapSpecIndex.js');
let ObjectStatusList = require('./ObjectStatusList.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let GhostMessage = require('./GhostMessage.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let EgoVehicleStatusExtended = require('./EgoVehicleStatusExtended.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let ERP42Info = require('./ERP42Info.js');
let VehicleCollision = require('./VehicleCollision.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let SensorPosControl = require('./SensorPosControl.js');
let WaitForTick = require('./WaitForTick.js');
let CollisionData = require('./CollisionData.js');
let IntersectionControl = require('./IntersectionControl.js');
let SkidSteer6wUGVCtrlCmd = require('./SkidSteer6wUGVCtrlCmd.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let RadarDetections = require('./RadarDetections.js');
let EventInfo = require('./EventInfo.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let PREvent = require('./PREvent.js');
let ObjectStatusListExtended = require('./ObjectStatusListExtended.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let SkateboardStatus = require('./SkateboardStatus.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let VehicleSpec = require('./VehicleSpec.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let TrafficLight = require('./TrafficLight.js');
let PRStatus = require('./PRStatus.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let ObjectStatus = require('./ObjectStatus.js');
let SyncModeRemoveObject = require('./SyncModeRemoveObject.js');
let SkidSteer6wUGVStatus = require('./SkidSteer6wUGVStatus.js');
let GPSMessage = require('./GPSMessage.js');
let RadarDetection = require('./RadarDetection.js');
let MapSpec = require('./MapSpec.js');
let SaveSensorData = require('./SaveSensorData.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let ObjectStatusExtended = require('./ObjectStatusExtended.js');

module.exports = {
  IntscnTL: IntscnTL,
  MoraiSimProcStatus: MoraiSimProcStatus,
  CtrlCmd: CtrlCmd,
  Lamps: Lamps,
  IntersectionStatus: IntersectionStatus,
  SkateboardCtrlCmd: SkateboardCtrlCmd,
  MoraiSrvResponse: MoraiSrvResponse,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  GetTrafficLightStatus: GetTrafficLightStatus,
  SyncModeAddObject: SyncModeAddObject,
  ReplayInfo: ReplayInfo,
  SyncModeInfo: SyncModeInfo,
  MultiEgoSetting: MultiEgoSetting,
  MapSpecIndex: MapSpecIndex,
  ObjectStatusList: ObjectStatusList,
  VehicleSpecIndex: VehicleSpecIndex,
  GhostMessage: GhostMessage,
  DdCtrlCmd: DdCtrlCmd,
  EgoVehicleStatusExtended: EgoVehicleStatusExtended,
  MoraiTLInfo: MoraiTLInfo,
  SyncModeCmdResponse: SyncModeCmdResponse,
  SyncModeCmd: SyncModeCmd,
  ERP42Info: ERP42Info,
  VehicleCollision: VehicleCollision,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  NpcGhostCmd: NpcGhostCmd,
  SetTrafficLight: SetTrafficLight,
  MoraiTLIndex: MoraiTLIndex,
  SensorPosControl: SensorPosControl,
  WaitForTick: WaitForTick,
  CollisionData: CollisionData,
  IntersectionControl: IntersectionControl,
  SkidSteer6wUGVCtrlCmd: SkidSteer6wUGVCtrlCmd,
  MoraiSimProcHandle: MoraiSimProcHandle,
  SyncModeResultResponse: SyncModeResultResponse,
  RadarDetections: RadarDetections,
  EventInfo: EventInfo,
  PRCtrlCmd: PRCtrlCmd,
  EgoVehicleStatus: EgoVehicleStatus,
  WaitForTickResponse: WaitForTickResponse,
  PREvent: PREvent,
  ObjectStatusListExtended: ObjectStatusListExtended,
  ScenarioLoad: ScenarioLoad,
  SkateboardStatus: SkateboardStatus,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  VehicleSpec: VehicleSpec,
  VehicleCollisionData: VehicleCollisionData,
  TrafficLight: TrafficLight,
  PRStatus: PRStatus,
  SyncModeSetGear: SyncModeSetGear,
  ObjectStatus: ObjectStatus,
  SyncModeRemoveObject: SyncModeRemoveObject,
  SkidSteer6wUGVStatus: SkidSteer6wUGVStatus,
  GPSMessage: GPSMessage,
  RadarDetection: RadarDetection,
  MapSpec: MapSpec,
  SaveSensorData: SaveSensorData,
  NpcGhostInfo: NpcGhostInfo,
  ObjectStatusExtended: ObjectStatusExtended,
};
