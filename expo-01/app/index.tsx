import {
  ActivityIndicator, Alert, Text, TextInput, View,
  KeyboardAvoidingView, Platform, TouchableOpacity
} from "react-native";


export default function Index() {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // ajuste se necessário
    >
      <View className="flex-1 items-start p-4 gap-4">
        
      </View>
    </KeyboardAvoidingView>
  );
}