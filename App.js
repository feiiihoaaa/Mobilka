import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.icon}>📖❤️</Text>
        <Text style={styles.title}>Привет! Это твой личный Дневник</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Diary")}>
            <Text style={styles.buttonText}>Начать</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.nav}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>👤</Text>
        <Text style={styles.navIcon}>☰</Text>
        <Text style={styles.navIcon}>🔍</Text>
      </View>
    </View>
  );
}

function DiaryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>📖❤️</Text>
        <Text style={styles.subtitle}>Записи дневника</Text>
      </View>

      <ScrollView contentContainerStyle={styles.entries}>
        {["10.09", "20.08", "06.08", "01.08", "27.07"].map((date) => (
          <TouchableOpacity key={date} style={styles.entryButton}>
            <Text style={styles.entryText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView horizontal style={styles.slider}>
        {["✨ Мотивация", "🌧 Настроение", "📅 Планы", "💭 Мысли"].map((text) => (
          <View key={text} style={styles.slide}>
            <Text style={styles.slideText}>{text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.nav}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>👤</Text>
        <Text style={styles.navIcon}>☰</Text>
        <Text style={styles.navIcon}>🔍</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8e1e4",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  icon: { fontSize: 50, color: "#c47b8a" },
  title: { fontSize: 20, color: "#c47b8a", textAlign: "center", marginVertical: 10 },
  subtitle: { fontSize: 22, color: "#c47b8a", textAlign: "center", marginBottom: 20 },
  buttonContainer: { width: "100%", gap: 10 },
  button: {
    backgroundColor: "#c47b8a",
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    backgroundColor: "#f8e1e4",
    position: "absolute",
    bottom: 0,
  },
  navIcon: { fontSize: 24, color: "#c47b8a" },
  header: { alignItems: "center", padding: 20 },
  entries: { alignItems: "center" },
  entryButton: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    marginVertical: 6,
    width: 200,
    alignItems: "center",
  },
  entryText: { color: "#c47b8a", fontSize: 16 },
  slider: { marginTop: 10 },
  slide: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  slideText: { color: "#c47b8a" },
});
