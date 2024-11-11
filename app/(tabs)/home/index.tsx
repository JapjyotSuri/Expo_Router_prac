import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'

const home = () => {
    const navigation=useNavigation();
  return (
    <View>
      <Text>home</Text>
      <Link href="/home/settings"><Text>Navigate to Settings screen</Text></Link>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})