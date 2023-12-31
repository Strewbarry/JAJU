#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import rospy
from math import sqrt, pow
from morai_msgs.msg import RadarDetections
from geometry_msgs.msg import Point
from sensor_msgs.msg import PointCloud

class listener():
    def __init__ (self):

        rospy.init_node('radar_data_listener', anonymous=True)

        rospy.Subscriber('/radar', RadarDetections, self.Radar_callback)

        self.is_radar = False

        rate = rospy.Rate(10)
        while not rospy.is_shutdown():
            if self.is_radar:
                os.system('clear')
                tmp_radar = []

                for idx in range(len(self.radar_msg.detections)):
                    if(self.radar_msg.detections[idx].amplitude == abs(10)):
                        dis = sqrt(pow(self.radar_msg.detections[idx].position.y, 2) + pow(self.radar_msg.detections[idx].position.x, 2))
                        print(dis, idx)
                    # if(self.radar_msg.detections[idx].position.y != 0.0):
                        # rospy.loginfo(self.radar_msg.detections[idx].position.y)
                #     """
                #     dis = sqrt(pow(self.radar_msg.detections[idx].position.y, 2) + pow(self.radar_msg.detections[idx].position.x, 2))"""
                #     if(self.radar_msg.detections[idx].rangerate != 0):
                #         tmp_radar.append(self.radar_msg.detections[idx].detection_id)
                #     print(self.radar_msg.detections[idx].position.y)

                # rospy.loginfo(tmp_radar)


            rate.sleep()
    
    
    def Radar_callback(self,msg):
        self.is_radar = True
        self.radar_msg = msg


if __name__ == '__main__':
    test = listener()