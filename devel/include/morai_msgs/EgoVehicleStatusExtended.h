// Generated by gencpp from file morai_msgs/EgoVehicleStatusExtended.msg
// DO NOT EDIT!


#ifndef MORAI_MSGS_MESSAGE_EGOVEHICLESTATUSEXTENDED_H
#define MORAI_MSGS_MESSAGE_EGOVEHICLESTATUSEXTENDED_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>
#include <geometry_msgs/Vector3.h>
#include <geometry_msgs/Vector3.h>
#include <geometry_msgs/Vector3.h>

namespace morai_msgs
{
template <class ContainerAllocator>
struct EgoVehicleStatusExtended_
{
  typedef EgoVehicleStatusExtended_<ContainerAllocator> Type;

  EgoVehicleStatusExtended_()
    : header()
    , unique_id(0)
    , acceleration()
    , position()
    , velocity()
    , heading(0.0)
    , accel(0.0)
    , brake(0.0)
    , wheel_angle(0.0)
    , wheel_angle_speed(0.0)
    , FL_wheel_speed(0.0)
    , FR_wheel_speed(0.0)
    , RL_wheel_speed(0.0)
    , RR_wheel_speed(0.0)
    , yaw_rate(0.0)  {
    }
  EgoVehicleStatusExtended_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , unique_id(0)
    , acceleration(_alloc)
    , position(_alloc)
    , velocity(_alloc)
    , heading(0.0)
    , accel(0.0)
    , brake(0.0)
    , wheel_angle(0.0)
    , wheel_angle_speed(0.0)
    , FL_wheel_speed(0.0)
    , FR_wheel_speed(0.0)
    , RL_wheel_speed(0.0)
    , RR_wheel_speed(0.0)
    , yaw_rate(0.0)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef int32_t _unique_id_type;
  _unique_id_type unique_id;

   typedef  ::geometry_msgs::Vector3_<ContainerAllocator>  _acceleration_type;
  _acceleration_type acceleration;

   typedef  ::geometry_msgs::Vector3_<ContainerAllocator>  _position_type;
  _position_type position;

   typedef  ::geometry_msgs::Vector3_<ContainerAllocator>  _velocity_type;
  _velocity_type velocity;

   typedef double _heading_type;
  _heading_type heading;

   typedef float _accel_type;
  _accel_type accel;

   typedef float _brake_type;
  _brake_type brake;

   typedef float _wheel_angle_type;
  _wheel_angle_type wheel_angle;

   typedef float _wheel_angle_speed_type;
  _wheel_angle_speed_type wheel_angle_speed;

   typedef float _FL_wheel_speed_type;
  _FL_wheel_speed_type FL_wheel_speed;

   typedef float _FR_wheel_speed_type;
  _FR_wheel_speed_type FR_wheel_speed;

   typedef float _RL_wheel_speed_type;
  _RL_wheel_speed_type RL_wheel_speed;

   typedef float _RR_wheel_speed_type;
  _RR_wheel_speed_type RR_wheel_speed;

   typedef float _yaw_rate_type;
  _yaw_rate_type yaw_rate;





  typedef boost::shared_ptr< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> const> ConstPtr;

}; // struct EgoVehicleStatusExtended_

typedef ::morai_msgs::EgoVehicleStatusExtended_<std::allocator<void> > EgoVehicleStatusExtended;

typedef boost::shared_ptr< ::morai_msgs::EgoVehicleStatusExtended > EgoVehicleStatusExtendedPtr;
typedef boost::shared_ptr< ::morai_msgs::EgoVehicleStatusExtended const> EgoVehicleStatusExtendedConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator1> & lhs, const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator2> & rhs)
{
  return lhs.header == rhs.header &&
    lhs.unique_id == rhs.unique_id &&
    lhs.acceleration == rhs.acceleration &&
    lhs.position == rhs.position &&
    lhs.velocity == rhs.velocity &&
    lhs.heading == rhs.heading &&
    lhs.accel == rhs.accel &&
    lhs.brake == rhs.brake &&
    lhs.wheel_angle == rhs.wheel_angle &&
    lhs.wheel_angle_speed == rhs.wheel_angle_speed &&
    lhs.FL_wheel_speed == rhs.FL_wheel_speed &&
    lhs.FR_wheel_speed == rhs.FR_wheel_speed &&
    lhs.RL_wheel_speed == rhs.RL_wheel_speed &&
    lhs.RR_wheel_speed == rhs.RR_wheel_speed &&
    lhs.yaw_rate == rhs.yaw_rate;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator1> & lhs, const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace morai_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
{
  static const char* value()
  {
    return "29e0d7add02c73a8dd83ba3c46d6bb17";
  }

  static const char* value(const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x29e0d7add02c73a8ULL;
  static const uint64_t static_value2 = 0xdd83ba3c46d6bb17ULL;
};

template<class ContainerAllocator>
struct DataType< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
{
  static const char* value()
  {
    return "morai_msgs/EgoVehicleStatusExtended";
  }

  static const char* value(const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n"
"int32 unique_id\n"
"geometry_msgs/Vector3 acceleration\n"
"geometry_msgs/Vector3 position\n"
"geometry_msgs/Vector3 velocity\n"
"\n"
"float64 heading\n"
"float32 accel\n"
"float32 brake\n"
"float32 wheel_angle\n"
"\n"
"float32 wheel_angle_speed\n"
"float32 FL_wheel_speed\n"
"float32 FR_wheel_speed\n"
"float32 RL_wheel_speed\n"
"float32 RR_wheel_speed\n"
"float32 yaw_rate\n"
"================================================================================\n"
"MSG: std_msgs/Header\n"
"# Standard metadata for higher-level stamped data types.\n"
"# This is generally used to communicate timestamped data \n"
"# in a particular coordinate frame.\n"
"# \n"
"# sequence ID: consecutively increasing ID \n"
"uint32 seq\n"
"#Two-integer timestamp that is expressed as:\n"
"# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n"
"# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n"
"# time-handling sugar is provided by the client library\n"
"time stamp\n"
"#Frame this data is associated with\n"
"string frame_id\n"
"\n"
"================================================================================\n"
"MSG: geometry_msgs/Vector3\n"
"# This represents a vector in free space. \n"
"# It is only meant to represent a direction. Therefore, it does not\n"
"# make sense to apply a translation to it (e.g., when applying a \n"
"# generic rigid transformation to a Vector3, tf2 will only apply the\n"
"# rotation). If you want your data to be translatable too, use the\n"
"# geometry_msgs/Point message instead.\n"
"\n"
"float64 x\n"
"float64 y\n"
"float64 z\n"
;
  }

  static const char* value(const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.unique_id);
      stream.next(m.acceleration);
      stream.next(m.position);
      stream.next(m.velocity);
      stream.next(m.heading);
      stream.next(m.accel);
      stream.next(m.brake);
      stream.next(m.wheel_angle);
      stream.next(m.wheel_angle_speed);
      stream.next(m.FL_wheel_speed);
      stream.next(m.FR_wheel_speed);
      stream.next(m.RL_wheel_speed);
      stream.next(m.RR_wheel_speed);
      stream.next(m.yaw_rate);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct EgoVehicleStatusExtended_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::morai_msgs::EgoVehicleStatusExtended_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "unique_id: ";
    Printer<int32_t>::stream(s, indent + "  ", v.unique_id);
    s << indent << "acceleration: ";
    s << std::endl;
    Printer< ::geometry_msgs::Vector3_<ContainerAllocator> >::stream(s, indent + "  ", v.acceleration);
    s << indent << "position: ";
    s << std::endl;
    Printer< ::geometry_msgs::Vector3_<ContainerAllocator> >::stream(s, indent + "  ", v.position);
    s << indent << "velocity: ";
    s << std::endl;
    Printer< ::geometry_msgs::Vector3_<ContainerAllocator> >::stream(s, indent + "  ", v.velocity);
    s << indent << "heading: ";
    Printer<double>::stream(s, indent + "  ", v.heading);
    s << indent << "accel: ";
    Printer<float>::stream(s, indent + "  ", v.accel);
    s << indent << "brake: ";
    Printer<float>::stream(s, indent + "  ", v.brake);
    s << indent << "wheel_angle: ";
    Printer<float>::stream(s, indent + "  ", v.wheel_angle);
    s << indent << "wheel_angle_speed: ";
    Printer<float>::stream(s, indent + "  ", v.wheel_angle_speed);
    s << indent << "FL_wheel_speed: ";
    Printer<float>::stream(s, indent + "  ", v.FL_wheel_speed);
    s << indent << "FR_wheel_speed: ";
    Printer<float>::stream(s, indent + "  ", v.FR_wheel_speed);
    s << indent << "RL_wheel_speed: ";
    Printer<float>::stream(s, indent + "  ", v.RL_wheel_speed);
    s << indent << "RR_wheel_speed: ";
    Printer<float>::stream(s, indent + "  ", v.RR_wheel_speed);
    s << indent << "yaw_rate: ";
    Printer<float>::stream(s, indent + "  ", v.yaw_rate);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MORAI_MSGS_MESSAGE_EGOVEHICLESTATUSEXTENDED_H
