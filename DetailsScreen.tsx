import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DetailsScreen({ navigation, route }: any) {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.description}>
          {product.description || 'No description available.'}
        </Text>

        <Text style={styles.price}>
          ₱{product.price || 0}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F2FF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 70,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4B3B61',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#77658C',
    textAlign: 'center',
    marginTop: 15,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#8A5CC2',
    marginTop: 20,
  },
});
