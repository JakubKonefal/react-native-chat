import React from 'react';
import { VisualForms } from '../styles/index';
import { View, Image, StyleSheet } from 'react-native';
import DefaultProfileAvatar from '../assets/images/profile.svg';

interface AvatarProps {
  avatar: string | undefined;
  size?: 'big' | 'medium' | 'small';
}

const Avatar = ({ avatar, size }: AvatarProps) => {
  const avatarSize =
    size === 'medium'
      ? VisualForms.defaultAvatarSize
      : size === 'small'
      ? VisualForms.smallAvatarSize
      : VisualForms.bigAvatarSize;

  const styles = StyleSheet.create({
    avatar: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: VisualForms.rounded,
    },
  });

  return avatar ? (
    <Image
      source={{ uri: avatar !== '' ? avatar : undefined }}
      style={styles.avatar}
    />
  ) : (
    <View>
      <DefaultProfileAvatar />
    </View>
  );
};

export default Avatar;
