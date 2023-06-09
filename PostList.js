import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const PostList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostPress = (post) => {
    navigation.navigate('PostDetail', { post });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      onPress={() => handlePostPress(item)}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20 }}>
        Posts
      </Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PostList;
