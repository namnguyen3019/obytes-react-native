import { useProducts } from '@/api';
import {
  EmptyList,
  FocusAwareStatusBar,
  Text,
  View,
  CustomText,
  MyText,
} from '@/ui';
import React, { useEffect, useState } from 'react';

export const Movie = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading || isError) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <Text>Show list of movie</Text>
      <CustomText>Hello, from NN</CustomText>
      <MyText bold={true} italic={false} lineThrough={false}>
        My custom text
      </MyText>

      {data.length > 0 &&
        data.map((p, index) => {
          return (
            <View key={p.id}>
              <Text>
                {p.title} - {p.price}
              </Text>
            </View>
          );
        })}
    </View>
  );
};
