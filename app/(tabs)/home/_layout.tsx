import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'


const StackLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" ></Stack.Screen>
    <Stack.Screen name="settings" ></Stack.Screen>
    
    
    
   </Stack>
  )
}

export default StackLayout

const styles = StyleSheet.create({})