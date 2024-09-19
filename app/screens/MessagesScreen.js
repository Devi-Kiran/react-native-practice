// import React, { useEffect, useState } from "react";
// import { FlatList, Text, TouchableHighlight, View } from "react-native";

// import Screen from "../components/customComponents/Screen";
// import VendorListItem from "../components/customComponents/VendorListItem";
// import SeparatorComponent from "../components/customComponents/SeparatorComponent";
// import ListItemDeleteAction from "../components/customComponents/ListItemDeleteAction";

// const data = [
//   {
//     _id: 1,
//     vendorName: "kranthi",
//     vendorimage:
//       "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
//     listings: "7",
//   },
//   {
//     _id: 2,
//     vendorName: "balu",
//     vendorimage:
//       "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
//     listings: "5",
//   },
//   {
//     _id: 3,
//     vendorName: "chikki",
//     vendorimage:
//       "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600",
//     listings: "1",
//   },
//   {
//     _id: 4,
//     vendorName: "chekri",
//     vendorimage:
//       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
//     listings: "4",
//   },
// ];

// function MessagesScreen() {
//   const [messages, setMessages] = useState(data);
//   const [refreshing, setRefreshing] = useState(false);

//   useEffect(() => {
//     if (messages.length == 0) {
//       setMessages(data);
//     }
//   }, [messages]);

//   const handleDelete = (id) => {
//     setMessages((prevMessages) => {
//       return prevMessages.filter((prevMessage) => prevMessage._id !== id);
//     });
//   };

//   return (
//     <Screen>
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item._id.toString()}
//         renderItem={({ item, index }) => (
//           <VendorListItem
//             vendorName={item.vendorName}
//             vendorimage={item.vendorimage}
//             listings={item.listings}
//             style={{ marginVertical: 0, paddingVertical: 10 }}
//             renderRightActions={() => (
//               <ListItemDeleteAction onPress={() => handleDelete(item._id)} />
//             )}
//             refreshing={refreshing}
//             onRefresh={() =>
//               setMessages([
//                 {
//                   _id: 4,
//                   vendorName: "chekri",
//                   vendorimage:
//                     "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
//                   listings: "4",
//                 },
//               ])
//             }
//           />
//         )}
//         ItemSeparatorComponent={SeparatorComponent} //we can use like this also <SeparatorComponent/>
//       />
//     </Screen>
//   );
// }

// export default MessagesScreen;

import React, { useState } from "react";
import { FlatList, View } from "react-native";

import Screen from "../components/customComponents/Screen";
import ListItem from "../components/customComponents/ListItem";
import SeparatorComponent from "../components/customComponents/SeparatorComponent";
import ListItemDeleteAction from "../components/customComponents/ListItemDeleteAction";

const data = [
  {
    _id: 1,
    vendorName: "kranthi",
    vendorimage:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    listings: "8 listings Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
  },
  {
    _id: 2,
    vendorName: "balu",
    vendorimage:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
    listings: "5 listings",
  },
  {
    _id: 3,
    vendorName: "chikki",
    vendorimage:
      "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600",
    listings: "1 listings",
  },
  {
    _id: 4,
    vendorName: "chekri",
    vendorimage:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    listings: "4 listings",
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (id) => {
    setMessages((prevMessages) => {
      return prevMessages.filter((prevMessage) => prevMessage._id !== id);
    });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulating a network request or data update
    setTimeout(() => {
      setMessages([
        {
          _id: 1,
          vendorName: "pushpa",
          vendorimage:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
          listings: "6 listings",
        },
        {
          _id: 2,
          vendorName: "vikram",
          vendorimage:
            "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
          listings: "2 listings",
        },
        {
          _id: 3,
          vendorName: "kushi",
          vendorimage:
            "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600",
          listings: "3 listings",
        },
        {
          _id: 4,
          vendorName: "liger",
          vendorimage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
          listings: "1 listings",
        },
      ]);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.vendorName}
            image={item.vendorimage}
            subTitle={item.listings}
            style={{ marginVertical: 0, paddingVertical: 10 }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item._id)} />
            )}
          />
        )}
        ItemSeparatorComponent={SeparatorComponent}
        refreshing={refreshing} // Tie the refreshing state to FlatList
        onRefresh={handleRefresh} // Trigger refresh logic when user pulls down
      />
    </Screen>
  );
}

export default MessagesScreen;
