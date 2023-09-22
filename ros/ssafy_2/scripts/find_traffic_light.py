#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import rospy
import os
import sys
from math import sqrt, pow
from morai_msgs.msg import EgoVehicleStatus, GetTrafficLightStatus
from geometry_msgs.msg import Point32

current_path = os.path.dirname(os.path.realpath(__file__))
sys.path.append(current_path)

from lib.mgeo.class_defs import *

class listner():
    def __init__ (self):
        rospy.init_node('Traffic_status_listener', anonymous=True)

        rospy.Subscriber('/Ego_topic', EgoVehicleStatus, self.Egostatos_callback)
        rospy.Subscriber('/GetTrafficLightStatus', GetTrafficLightStatus, self.traffic_light_callback)

        load_path = os.path.normpath(os.path.join(current_path, 'lib/mgeo_data/R_KR_PG_K-City'))
        mgeo_planner_map = MGeo.create_instance_from_json(load_path)
        
        self.is_traffic = False
        light_set = mgeo_planner_map.light_set
        self.lights = light_set.signals

        rate = rospy.Rate(10)
        while not rospy.is_shutdown():
            if self.is_traffic:
                self.light_msg = self.findTrafficLight()

                dis = sqrt(pow(self.ego_x - self.light_msg.x, 2) + pow(self.ego_y - self.light_msg.y, 2))

                os.system('clear')
                rospy.loginfo(dis)

            rate.sleep()
    
    def Egostatos_callback(self,msg):
        self.ego_x = msg.position.x
        self.ego_y = msg.position.y

    def traffic_light_callback(self,msg):
        self.is_traffic = True
        self.trafficLightIdx = msg.trafficLightIndex
        self.trafficLightStatus = msg.trafficLightStatus

    def findTrafficLight(self):
        near_light = Point32()
        for light_idx in self.lights:
            tmp_Idx = self.lights[light_idx].idx
            if tmp_Idx == self.trafficLightIdx:
                near_light.x = self.lights[light_idx].point[0]
                near_light.y = self.lights[light_idx].point[1]

                return near_light
    

if __name__ == '__main__':
    test=listner()