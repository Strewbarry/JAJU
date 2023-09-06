// Generated by gencpp from file morai_msgs/PREvent.msg
// DO NOT EDIT!


#ifndef MORAI_MSGS_MESSAGE_PREVENT_H
#define MORAI_MSGS_MESSAGE_PREVENT_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace morai_msgs
{
template <class ContainerAllocator>
struct PREvent_
{
  typedef PREvent_<ContainerAllocator> Type;

  PREvent_()
    : mountVehicle(false)  {
    }
  PREvent_(const ContainerAllocator& _alloc)
    : mountVehicle(false)  {
  (void)_alloc;
    }



   typedef uint8_t _mountVehicle_type;
  _mountVehicle_type mountVehicle;





  typedef boost::shared_ptr< ::morai_msgs::PREvent_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::morai_msgs::PREvent_<ContainerAllocator> const> ConstPtr;

}; // struct PREvent_

typedef ::morai_msgs::PREvent_<std::allocator<void> > PREvent;

typedef boost::shared_ptr< ::morai_msgs::PREvent > PREventPtr;
typedef boost::shared_ptr< ::morai_msgs::PREvent const> PREventConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::morai_msgs::PREvent_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::morai_msgs::PREvent_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::morai_msgs::PREvent_<ContainerAllocator1> & lhs, const ::morai_msgs::PREvent_<ContainerAllocator2> & rhs)
{
  return lhs.mountVehicle == rhs.mountVehicle;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::morai_msgs::PREvent_<ContainerAllocator1> & lhs, const ::morai_msgs::PREvent_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace morai_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsFixedSize< ::morai_msgs::PREvent_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::morai_msgs::PREvent_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::morai_msgs::PREvent_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::morai_msgs::PREvent_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::morai_msgs::PREvent_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::morai_msgs::PREvent_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::morai_msgs::PREvent_<ContainerAllocator> >
{
  static const char* value()
  {
    return "ab98a8b314ee24dcbc91e59253d3a584";
  }

  static const char* value(const ::morai_msgs::PREvent_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xab98a8b314ee24dcULL;
  static const uint64_t static_value2 = 0xbc91e59253d3a584ULL;
};

template<class ContainerAllocator>
struct DataType< ::morai_msgs::PREvent_<ContainerAllocator> >
{
  static const char* value()
  {
    return "morai_msgs/PREvent";
  }

  static const char* value(const ::morai_msgs::PREvent_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::morai_msgs::PREvent_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bool mountVehicle\n"
;
  }

  static const char* value(const ::morai_msgs::PREvent_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::morai_msgs::PREvent_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.mountVehicle);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct PREvent_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::morai_msgs::PREvent_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::morai_msgs::PREvent_<ContainerAllocator>& v)
  {
    s << indent << "mountVehicle: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.mountVehicle);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MORAI_MSGS_MESSAGE_PREVENT_H
