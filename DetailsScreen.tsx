```tsx
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

        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>P</Text>
        </View>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price}
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>
            Product Details
          </Text>

          <Text style={styles.productId}>
            Product ID: {product.id || 'N/A'}
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>
            ← Back to Products
          </Text>
        </TouchableOpacity>

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

  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#EDE3F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  iconText: {
    fontSize: 45,
    fontWeight: '700',
    color: '#9B7BC1',
  },

  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4B3B61',
    textAlign: 'center',
  },

  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#9B7BC1',
    marginTop: 8,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    width: '100%',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#E5D9F2',
  },

  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4B3B61',
    marginBottom: 10,
  },

  productId: {
    fontSize: 14,
    color: '#9B7BC1',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#7D7188',
  },

  backButton: {
    backgroundColor: '#9B7BC1',
    borderRadius: 14,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
```
