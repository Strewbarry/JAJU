
import React, { useEffect, useState } from 'react';
import ROSLIB from 'roslib';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      url: 'ws://13.124.128.202:9090', // ROS Bridge WebSocket URL
    });

    ros.on('connection', () => {
      console.log('Connected to ROS Bridge');
      const listener = new ROSLIB.Topic({
        ros: ros,
        name: '', // 구독하려는 ROS 토픽 이름
        messageType: '', // 토픽 메시지 타입
      });

      listener.subscribe((message) => {
        console.log('Received message: ', message.data);
        setMessage(message.data);
      });
    });

    ros.on('error', (error) => {
      console.error('Error connecting to ROS Bridge: ', error);
    });

    ros.on('close', () => {
      console.log('Connection to ROS Bridge closed');
    });

    return () => {
      ros.close();
    };
  }, []);

  return (
    <div className="App">
      <h1>ROS Topic Data:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import ROSLIB from 'roslib';

// function ROSApp() {
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState("Not connected");
//   const [linear, setLinear] = useState({ x: 0, y: 0, z: 0 });
//   const [angular, setAngular] = useState({ x: 0, y: 0, z: 0 });

//   const ros = new ROSLIB.Ros({
//     url: 'ws://13.124.128.202:9090', // ROS Bridge WebSocket URL
//   });

//   useEffect(() => {
//     ros.on('connection', () => {
//       console.log('Connected to ROS Bridge');
//       const listener = new ROSLIB.Topic({
//         ros: ros,
//         name: '', // 구독하려는 ROS 토픽 이름
//         messageType: '', // 토픽 메시지 타입
//       });

//       listener.subscribe((message) => {
//         console.log('Received message: ', message.data);
//         setMessage(message.data);
//       });
//     });

//     ros.on('error', (error) => {
//       console.error('Error connecting to ROS Bridge: ', error);
//     });

//     ros.on('close', () => {
//       console.log('Connection to ROS Bridge closed');
//     });

//     return () => {
//       ros.close();
//     };
//   }, []);

//   function convert(input) {
//     if (input.charAt(0) === "-") {
//       let x = input.slice(0);
//       return parseInt(x);
//     } else {
//       return parseInt(input);
//     }
//   }

//   function connect() {
//     ros.connect("ws://13.124.128.202:9090");
//     ros.on('error', function (error) {
//       console.log(error);
//       setStatus(error);
//     });

//     ros.on('connection', function () {
//       console.log('Connected!');
//       setStatus("Connected!");
//     });

//     ros.on('close', function () {
//       console.log('Connection closed');
//       setStatus("Connection closed");
//     });
//   }

//   function publish() {
//     const cmdVel = new ROSLIB.Topic({
//       ros: ros,
//       name: "pose_topic",
//       messageType: "geometry_msgs/Pose2D"
//     });

//     const data = new ROSLIB.Message({
//       x: linear.x,
//       y: linear.y,
//       theta: angular.z
//     });

//     console.log('msg', data);
//     cmdVel.publish(data);
//   }

//   return (
//     <div>
//       <h1>ROS Topic Data:</h1>
//       <p>{message}</p>

//       <div>
//         {status}
//       </div>
//       <button onClick={() => connect()}>Connect</button>
//       <p>Send a message to turtle</p>
//       <p>Linear:</p>
//       <label>X</label>
//       <input name={"linear"} type={"number"} value={linear.x} onChange={(ev) => setLinear({ ...linear, x: convert(ev.target.value) })} />
//       {/* ... (다른 입력 필드들도 여기에 있습니다) ... */}
//       <button onClick={() => publish()}>Publish</button>
//     </div>
//   );
// }

// export default ROSApp;
