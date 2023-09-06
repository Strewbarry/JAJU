
"use strict";

let EventInfo = require('./EventInfo.js');
let ReplayInfo = require('./ReplayInfo.js');
let VehicleSpec = require('./VehicleSpec.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let SyncModeAddObject = require('./SyncModeAddObject.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let MapSpecIndex = require('./MapSpecIndex.js');
let RadarDetection = require('./RadarDetection.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let SyncModeRemoveObject = require('./SyncModeRemoveObject.js');
let PREvent = require('./PREvent.js');
let GPSMessage = require('./GPSMessage.js');
let IntscnTL = require('./IntscnTL.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let SaveSensorData = require('./SaveSensorData.js');
let ObjectStatusListExtended = require('./ObjectStatusListExtended.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let SkateboardCtrlCmd = require('./SkateboardCtrlCmd.js');
let SensorPosControl = require('./SensorPosControl.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let ERP42Info = require('./ERP42Info.js');
let GhostMessage = require('./GhostMessage.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let RadarDetections = require('./RadarDetections.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let CtrlCmd = require('./CtrlCmd.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let TrafficLight = require('./TrafficLight.js');
let IntersectionControl = require('./IntersectionControl.js');
let SkateboardStatus = require('./SkateboardStatus.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let WaitForTick = require('./WaitForTick.js');
let CollisionData = require('./CollisionData.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let ObjectStatusExtended = require('./ObjectStatusExtended.js');
let ObjectStatus = require('./ObjectStatus.js');
let Lamps = require('./Lamps.js');
let MapSpec = require('./MapSpec.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let VehicleCollision = require('./VehicleCollision.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let PRStatus = require('./PRStatus.js');
let EgoVehicleStatusExtended = require('./EgoVehicleStatusExtended.js');
let ObjectStatusList = require('./ObjectStatusList.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');

module.exports = {
  EventInfo: EventInfo,
  ReplayInfo: ReplayInfo,
  VehicleSpec: VehicleSpec,
  MoraiTLIndex: MoraiTLIndex,
  GetTrafficLightStatus: GetTrafficLightStatus,
  MoraiTLInfo: MoraiTLInfo,
  SyncModeAddObject: SyncModeAddObject,
  PRCtrlCmd: PRCtrlCmd,
  SyncModeInfo: SyncModeInfo,
  MapSpecIndex: MapSpecIndex,
  RadarDetection: RadarDetection,
  SetTrafficLight: SetTrafficLight,
  SyncModeRemoveObject: SyncModeRemoveObject,
  PREvent: PREvent,
  GPSMessage: GPSMessage,
  IntscnTL: IntscnTL,
  SyncModeResultResponse: SyncModeResultResponse,
  VehicleSpecIndex: VehicleSpecIndex,
  EgoVehicleStatus: EgoVehicleStatus,
  SaveSensorData: SaveSensorData,
  ObjectStatusListExtended: ObjectStatusListExtended,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  SkateboardCtrlCmd: SkateboardCtrlCmd,
  SensorPosControl: SensorPosControl,
  WaitForTickResponse: WaitForTickResponse,
  ERP42Info: ERP42Info,
  GhostMessage: GhostMessage,
  SyncModeCmd: SyncModeCmd,
  SyncModeSetGear: SyncModeSetGear,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  RadarDetections: RadarDetections,
  MoraiSimProcHandle: MoraiSimProcHandle,
  CtrlCmd: CtrlCmd,
  IntersectionStatus: IntersectionStatus,
  TrafficLight: TrafficLight,
  IntersectionControl: IntersectionControl,
  SkateboardStatus: SkateboardStatus,
  ScenarioLoad: ScenarioLoad,
  MoraiSimProcStatus: MoraiSimProcStatus,
  MoraiSrvResponse: MoraiSrvResponse,
  WaitForTick: WaitForTick,
  CollisionData: CollisionData,
  VehicleCollisionData: VehicleCollisionData,
  ObjectStatusExtended: ObjectStatusExtended,
  ObjectStatus: ObjectStatus,
  Lamps: Lamps,
  MapSpec: MapSpec,
  SyncModeCmdResponse: SyncModeCmdResponse,
  MultiEgoSetting: MultiEgoSetting,
  VehicleCollision: VehicleCollision,
  DdCtrlCmd: DdCtrlCmd,
  PRStatus: PRStatus,
  EgoVehicleStatusExtended: EgoVehicleStatusExtended,
  ObjectStatusList: ObjectStatusList,
  NpcGhostInfo: NpcGhostInfo,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  NpcGhostCmd: NpcGhostCmd,
};
