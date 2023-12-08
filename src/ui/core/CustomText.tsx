import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledText = styled(Text);
export const CustomText = ({ children, ...props }: any) => {
  return (
    <StyledText className="text-white text-lg bg-zinc-400">
      {children}
    </StyledText>
  );
};
