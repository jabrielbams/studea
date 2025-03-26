import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ScreenWrapper = ({
  children,
  bg = "white",
  style,
  contentContainerStyle,
  scrollable = false,
  statusBarStyle = "dark",
}) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 5 ? top + 5 : 30;

  // Base container style
  const containerStyle = [
    styles.container,
    { backgroundColor: bg, paddingTop },
    style,
  ];

  // Render content in a ScrollView if scrollable is true
  if (scrollable) {
    return (
      <View style={containerStyle}>
        <StatusBar style={statusBarStyle} />
        <ScrollView
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'>
          {children}
        </ScrollView>
      </View>
    );
  }

  // Otherwise render directly in a View
  return (
    <View style={containerStyle}>
      <StatusBar style={statusBarStyle} />
      <View style={[styles.content, contentContainerStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default ScreenWrapper;
