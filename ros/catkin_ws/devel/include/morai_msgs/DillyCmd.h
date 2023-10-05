// Generated by gencpp from file morai_msgs/DillyCmd.msg
// DO NOT EDIT!


#ifndef MORAI_MSGS_MESSAGE_DILLYCMD_H
#define MORAI_MSGS_MESSAGE_DILLYCMD_H


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
struct DillyCmd_
{
  typedef DillyCmd_<ContainerAllocator> Type;

  DillyCmd_()
    : isPickup(false)
    , deliveryItemIndex(0)  {
    }
  DillyCmd_(const ContainerAllocator& _alloc)
    : isPickup(false)
    , deliveryItemIndex(0)  {
  (void)_alloc;
    }



   typedef uint8_t _isPickup_type;
  _isPickup_type isPickup;

   typedef int32_t _deliveryItemIndex_type;
  _deliveryItemIndex_type deliveryItemIndex;





  typedef boost::shared_ptr< ::morai_msgs::DillyCmd_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::morai_msgs::DillyCmd_<ContainerAllocator> const> ConstPtr;

}; // struct DillyCmd_

typedef ::morai_msgs::DillyCmd_<std::allocator<void> > DillyCmd;

typedef boost::shared_ptr< ::morai_msgs::DillyCmd > DillyCmdPtr;
typedef boost::shared_ptr< ::morai_msgs::DillyCmd const> DillyCmdConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::morai_msgs::DillyCmd_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::morai_msgs::DillyCmd_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::morai_msgs::DillyCmd_<ContainerAllocator1> & lhs, const ::morai_msgs::DillyCmd_<ContainerAllocator2> & rhs)
{
  return lhs.isPickup == rhs.isPickup &&
    lhs.deliveryItemIndex == rhs.deliveryItemIndex;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::morai_msgs::DillyCmd_<ContainerAllocator1> & lhs, const ::morai_msgs::DillyCmd_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace morai_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::morai_msgs::DillyCmd_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::morai_msgs::DillyCmd_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::morai_msgs::DillyCmd_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::morai_msgs::DillyCmd_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::morai_msgs::DillyCmd_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::morai_msgs::DillyCmd_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::morai_msgs::DillyCmd_<ContainerAllocator> >
{
  static const char* value()
  {
    return "4c01be8e010c2bb6f36d7ace7c88decc";
  }

  static const char* value(const ::morai_msgs::DillyCmd_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x4c01be8e010c2bb6ULL;
  static const uint64_t static_value2 = 0xf36d7ace7c88deccULL;
};

template<class ContainerAllocator>
struct DataType< ::morai_msgs::DillyCmd_<ContainerAllocator> >
{
  static const char* value()
  {
    return "morai_msgs/DillyCmd";
  }

  static const char* value(const ::morai_msgs::DillyCmd_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::morai_msgs::DillyCmd_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bool isPickup\n"
"int32 deliveryItemIndex\n"
;
  }

  static const char* value(const ::morai_msgs::DillyCmd_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::morai_msgs::DillyCmd_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.isPickup);
      stream.next(m.deliveryItemIndex);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct DillyCmd_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::morai_msgs::DillyCmd_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::morai_msgs::DillyCmd_<ContainerAllocator>& v)
  {
    s << indent << "isPickup: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.isPickup);
    s << indent << "deliveryItemIndex: ";
    Printer<int32_t>::stream(s, indent + "  ", v.deliveryItemIndex);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MORAI_MSGS_MESSAGE_DILLYCMD_H
