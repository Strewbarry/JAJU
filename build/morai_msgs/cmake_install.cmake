# Install script for directory: /home/c104/catkin_ws/src/MORAI-ROS_morai_msgs

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/c104/catkin_ws/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

# Set default install directory permissions.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "/usr/bin/objdump")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  
      if (NOT EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}")
        file(MAKE_DIRECTORY "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}")
      endif()
      if (NOT EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/.catkin")
        file(WRITE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/.catkin" "")
      endif()
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/c104/catkin_ws/install/_setup_util.py")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  file(INSTALL DESTINATION "/home/c104/catkin_ws/install" TYPE PROGRAM FILES "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/_setup_util.py")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/c104/catkin_ws/install/env.sh")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  file(INSTALL DESTINATION "/home/c104/catkin_ws/install" TYPE PROGRAM FILES "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/env.sh")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/c104/catkin_ws/install/setup.bash;/home/c104/catkin_ws/install/local_setup.bash")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  file(INSTALL DESTINATION "/home/c104/catkin_ws/install" TYPE FILE FILES
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/setup.bash"
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/local_setup.bash"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/c104/catkin_ws/install/setup.sh;/home/c104/catkin_ws/install/local_setup.sh")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  file(INSTALL DESTINATION "/home/c104/catkin_ws/install" TYPE FILE FILES
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/setup.sh"
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/local_setup.sh"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/c104/catkin_ws/install/setup.zsh;/home/c104/catkin_ws/install/local_setup.zsh")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  file(INSTALL DESTINATION "/home/c104/catkin_ws/install" TYPE FILE FILES
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/setup.zsh"
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/local_setup.zsh"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  list(APPEND CMAKE_ABSOLUTE_DESTINATION_FILES
   "/home/c104/catkin_ws/install/.rosinstall")
  if(CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(WARNING "ABSOLUTE path INSTALL DESTINATION : ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  if(CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION)
    message(FATAL_ERROR "ABSOLUTE path INSTALL DESTINATION forbidden (by caller): ${CMAKE_ABSOLUTE_DESTINATION_FILES}")
  endif()
  file(INSTALL DESTINATION "/home/c104/catkin_ws/install" TYPE FILE FILES "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/.rosinstall")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/msg" TYPE FILE FILES
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/CtrlCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/EgoVehicleStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/EgoVehicleStatusExtended.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/GPSMessage.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/GhostMessage.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ObjectStatusList.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ObjectStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ObjectStatusExtended.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ObjectStatusListExtended.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/TrafficLight.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ERP42Info.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/GetTrafficLightStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SetTrafficLight.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/IntersectionControl.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/IntersectionStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/CollisionData.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MultiEgoSetting.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/IntscnTL.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SensorPosControl.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MoraiSimProcHandle.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MoraiSimProcStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MoraiSrvResponse.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ScenarioLoad.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MoraiTLIndex.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MoraiTLInfo.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SaveSensorData.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/ReplayInfo.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/EventInfo.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/Lamps.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/VehicleSpec.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/VehicleSpecIndex.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/NpcGhostCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/NpcGhostInfo.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/VehicleCollisionData.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/VehicleCollision.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeAddObject.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeInfo.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/WaitForTickResponse.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeRemoveObject.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeCmdResponse.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/WaitForTick.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MapSpec.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/MapSpecIndex.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeCtrlCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeSetGear.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeResultResponse.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SyncModeScenarioLoad.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/RadarDetection.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/RadarDetections.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/PRStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/PRCtrlCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/PREvent.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SkateboardCtrlCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SkateboardStatus.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SkidSteer6wUGVCtrlCmd.msg"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/msg/SkidSteer6wUGVStatus.msg"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/srv" TYPE FILE FILES
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiScenarioLoadSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSimpProcSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiTLInfoSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiEventCmdSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiVehicleSpecSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSyncModeCmdSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiWaitForTickSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiMapSpecSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSyncModeCtrlCmdSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSyncModeSetGearSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSyncModeSLSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/PREventSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSyncModeAddObjectSrv.srv"
    "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/srv/MoraiSyncModeRemoveObjectSrv.srv"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/cmake" TYPE FILE FILES "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/morai_msgs-msg-paths.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/c104/catkin_ws/devel/.private/morai_msgs/include/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "/home/c104/catkin_ws/devel/.private/morai_msgs/share/roseus/ros/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "/home/c104/catkin_ws/devel/.private/morai_msgs/share/common-lisp/ros/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "/home/c104/catkin_ws/devel/.private/morai_msgs/share/gennodejs/ros/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  execute_process(COMMAND "/usr/bin/python3" -m compileall "/home/c104/catkin_ws/devel/.private/morai_msgs/lib/python3/dist-packages/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python3/dist-packages" TYPE DIRECTORY FILES "/home/c104/catkin_ws/devel/.private/morai_msgs/lib/python3/dist-packages/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/morai_msgs.pc")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/cmake" TYPE FILE FILES "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/morai_msgs-msg-extras.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/cmake" TYPE FILE FILES
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/morai_msgsConfig.cmake"
    "/home/c104/catkin_ws/build/morai_msgs/catkin_generated/installspace/morai_msgsConfig-version.cmake"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs" TYPE FILE FILES "/home/c104/catkin_ws/src/MORAI-ROS_morai_msgs/package.xml")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/home/c104/catkin_ws/build/morai_msgs/gtest/cmake_install.cmake")

endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
file(WRITE "/home/c104/catkin_ws/build/morai_msgs/${CMAKE_INSTALL_MANIFEST}"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
