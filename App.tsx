import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';
// common
import {FooterComponent, ProductButton} from '~/components';
import {useCalculatingPrice} from '~/hooks';
import {globalStyles} from '~/styles';
// inner
import {data} from '~/mock';
import {IData} from '~/type';

const App = () => {
  const [handleCalculatePrice, handleCalculatePDW] = useCalculatingPrice(data);

  const handleRenderItem: ListRenderItem<IData> = useCallback(
    ({item}: {item: IData}) => {
      return (
        <ProductButton
          volume={item.volume}
          price={item.price}
          name={item.name}
        />
      );
    },
    [],
  );

  const handleRenderFooter = useCallback(() => {
    return (
      <View style={styles.footer}>
        <FooterComponent
          handleCalculatePrice={handleCalculatePrice}
          handleCalculatePDW={handleCalculatePDW}
        />
      </View>
    );
  }, [handleCalculatePrice, handleCalculatePDW]);

  const mainKeyExtractor = useCallback((item: IData, idx: number) => {
    return `${item?.id}${idx}`;
  }, []);

  return (
    <SafeAreaView style={globalStyles.flex1}>
      <FlatList
        data={data}
        renderItem={handleRenderItem}
        keyExtractor={mainKeyExtractor}
        contentContainerStyle={[
          globalStyles.flex1,
          globalStyles.paddingHorizontal10,
        ]}
        ListFooterComponent={handleRenderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default App;
