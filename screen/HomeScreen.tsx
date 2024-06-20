import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Welcome to Our Shoe Store!
      </Text>
      <Image 
        source={{ uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/105/MTA-160589138/no-brand_no-brand_full01.jpg' }} 
        style={styles.image} 
      />
      <Text style={styles.promoText}>
        "Dapatkan sepatu impian Anda dengan harga spesial, stok terbatas hanya untuk minggu ini!"
      </Text>
      <Text style={styles.promoText}>Jangan lupa mampir</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Cursive', // Ganti ini dengan nama font yang diinginkan
  },
  promoText: {
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Cursive', // Ganti ini dengan nama font yang diinginkan
    fontSize: 18,
    color: 'black', // Indigo
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4B0082',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Cursive', // Ganti ini dengan nama font yang diinginkan
  },
});
