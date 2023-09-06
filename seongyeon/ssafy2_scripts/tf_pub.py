#!/usr/bin/env python
# -*- coding: utf-8 -*-
import rospy
import tf
from math import pi
from nav_msgs.msg import Odometry

# tf 는 물체의 위치와 자세 데이터를 좌표계로 나타내는 예제입니다.

# 노드 실행 순서 
# 1. Callback 함수 생성
# 2. 브로드캐스터 생성 및 Ego 상태 tf 브로드캐스팅

class Ego_listener():
    def __init__(self):
        rospy.init_node('status_listener', anonymous=True)
        
        rospy.Subscriber("odom", Odometry, self.odom_callback)
        br = tf.TransformBroadcaster()
        self.is_odom = False
        self.br_param_translation = None
        self.br_param_rotation = None
        self.br_param_time = None
        self.br_param_child = "Ego"
        self.br_param_parent = "map"

        rate = rospy.Rate(10)
        while not rospy.is_shutdown():
            if self.is_odom == True:
                print("TF is currently being broadcast !")
                br.sendTransform(self.br_param_translation, 
                                 self.br_param_rotation,
                                 self.br_param_time, 
                                 self.br_param_child, 
                                 self.br_param_parent)
            else:
                print("waiting for data...")    
            rate.sleep()


    #TODO: (1) Callback 함수 생성
    def odom_callback(self,msg):
        self.is_odom = True

        # gpsimu_parser.py 예제에서 Publish 해주는 Odometry 메세지 데이터를 Subscrib 한다.
        # Odometry 메세지 에 담긴 물체의 위치 와 자세 데이터를 아래 변수에 넣어준다.
        pos_x = msg.pose.pose.position.x
        pos_y = msg.pose.pose.position.y

        ori_x = msg.pose.pose.orientation.x
        ori_y = msg.pose.pose.orientation.y
        ori_z = msg.pose.pose.orientation.z
        ori_w = msg.pose.pose.orientation.w


        #TODO: (2) 브로드캐스터 생성 및 Ego 상태 tf 브로드캐스팅
        # TF 데이터를 broadcast 해주는 변수를 선언한다.
        # TF 데이터에 물체의 좌표와 자세 데이터를 시간 그리고 Frame ID 를 넣어주면 된다.
        # TF 예제는 map 좌표 를 기준으로 Ego 차량의 위치를 좌표를 나타낸다
        self.br_param_translation = (pos_x, pos_y, 1)
        self.br_param_rotation = (ori_x, ori_y, ori_z, ori_w)
        self.br_param_time = rospy.Time.now()


if __name__ == '__main__':
    try:
        tl=Ego_listener()
    except rospy.ROSInternalException:
        pass
