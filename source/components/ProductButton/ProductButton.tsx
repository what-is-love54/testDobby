import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// common
import {globalStyles} from '~/styles';

interface ButtonComponentProps {
  name: string;
  volume: number;
  price: number;
}

export const ProductButton: React.FC<ButtonComponentProps> = memo(
  ({name, volume, price}) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={[globalStyles.flexDirectionRow, globalStyles.marginBottom20]}>
        <Text
          style={[
            styles.textButton,
            globalStyles.flex1,
            globalStyles.textLeft,
          ]}>
          {name}
        </Text>
        <Text
          style={[
            styles.textButton,
            globalStyles.flex2,
            globalStyles.textCenter,
          ]}>
          {volume}
        </Text>
        <Text
          style={[
            styles.textButton,
            globalStyles.flex1,
            globalStyles.textRight,
          ]}>
          {price}
        </Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  textButton: {
    color: '#000',
    fontSize: 16,
  },
});
