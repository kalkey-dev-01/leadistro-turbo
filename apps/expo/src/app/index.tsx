
// import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'expo-router'
import { auth } from '~/firebase/config'
import type { User } from 'firebase/auth/react-native'
import { Text, View } from 'react-native'

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setLoading(true);
      setUser(user);
      setLoading(false);
    })
  }, [user, loading])
  if (loading) return (
    <View>
      <Text>Loading</Text>
    </View>
  )
  if (!user) return <Redirect href='signin' />
  return <Redirect href='home' />
}

export default Index



// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// import React from "react";
// import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Stack, useRouter } from "expo-router";
// import { FlashList } from "@shopify/flash-list";

// import { api, type RouterOutputs } from "~/utils/api";

// const PostCard: React.FC<{
//   post: RouterOutputs["post"]["all"][number];
//   onDelete: () => void;
// }> = ({ post, onDelete }) => {
//   const router = useRouter();

//   return (
//     <View className="flex flex-row rounded-lg bg-white/10 p-4">
//       <View className="flex-grow">
//         <TouchableOpacity onPress={() => router.push(`/post/${post.id}`)}>
//           <Text className="text-xl font-semibold text-emerald-400">
//             {post.title}
//           </Text>
//           <Text className="mt-2 text-white">{post.content}</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={onDelete}>
//         <Text className="font-bold uppercase text-emerald-400">Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CreatePost: React.FC = () => {
//   const utils = api.useContext();

//   const [title, setTitle] = React.useState("");
//   const [content, setContent] = React.useState("");

//   const { mutate, error } = api.post.create.useMutation({
//     async onSuccess() {
//       setTitle("");
//       setContent("");
//       await utils.post.all.invalidate();
//     },
//   });

//   return (
//     <View className="mt-4">
//       <TextInput
//         className="mb-2 rounded bg-white/10 p-2 text-white"
//         placeholderTextColor="rgba(255, 255, 255, 0.5)"
//         value={title}
//         onChangeText={setTitle}
//         placeholder="Title"
//       />
//       {error?.data?.zodError?.fieldErrors.title && (
//         <Text className="mb-2 text-red-500">
//           {error.data.zodError.fieldErrors.title}
//         </Text>
//       )}
//       <TextInput
//         className="mb-2 rounded bg-white/10 p-2 text-white"
//         placeholderTextColor="rgba(255, 255, 255, 0.5)"
//         value={content}
//         onChangeText={setContent}
//         placeholder="Content"
//       />
//       {error?.data?.zodError?.fieldErrors.content && (
//         <Text className="mb-2 text-red-500">
//           {error.data.zodError.fieldErrors.content}
//         </Text>
//       )}
//       <TouchableOpacity
//         className="rounded bg-emerald-400 p-2"
//         onPress={() => {
//           mutate({
//             title,
//             content,
//           });
//         }}
//       >
//         <Text className="font-semibold text-white">Publish post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Index = () => {
//   const utils = api.useContext();

//   const postQuery = api.post.all.useQuery();

//   const deletePostMutation = api.post.delete.useMutation({
//     onSettled: () => utils.post.all.invalidate(),
//   });

//   return (
//     <SafeAreaView className="bg-slate-700">
//       {/* Changes page title visible on the header */}
//       <Stack.Screen options={{ title: "Create Campaigns", headerTitleStyle: { color: '#fff' }, headerTitleAlign: 'center' }} />
//       <View className="h-full w-full p-3">
//         <Text className="mx-auto pb-2 text-3xl font-bold text-white">
//           lead<Text className="text-emerald-400">istro</Text> Campaign Creator.
//         </Text>
//         <Button
//           onPress={() => void utils.post.all.invalidate()}
//           title="Refresh Campaigns"
//           color={"#000"}
//         />
//         <View className="py-2">
//           <Text className="font-semibold italic text-white">
//             Select A Campaign
//           </Text>
//         </View>

//         <FlashList
//           data={postQuery.data}
//           estimatedItemSize={20}
//           ItemSeparatorComponent={() => <View className="h-3" />}
//           renderItem={(p) => (
//             <PostCard
//               post={p.item}
//               onDelete={() => deletePostMutation.mutate(p.item.id)}
//             />
//           )}
//         />

//         <CreatePost />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Index;
