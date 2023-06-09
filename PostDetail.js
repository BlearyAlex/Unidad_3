import React from 'react';
import { View, Text } from 'react-native';

const PostDetail = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
        Detalles del post
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>
        Título: {post.title}
      </Text>
      <Text style={{ fontSize: 16 }}>Cuerpo: {post.body}</Text>
    </View>
  );
};

export default PostDetail;
