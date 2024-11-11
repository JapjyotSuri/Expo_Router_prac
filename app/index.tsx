import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, useNavigation } from 'expo-router'
import {Stack} from 'expo-router'
import Hello from '@/Component/Hello'
const index = () => {
    
  return (
     <Redirect href='/home' />
      
    
  )
}

export default index

const styles = StyleSheet.create({})