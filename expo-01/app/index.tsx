import {
  ActivityIndicator, Alert, Text, TextInput, View,
  KeyboardAvoidingView, Platform, TouchableOpacity
} from "react-native";
import { Link, useRouter } from "expo-router";
import { CalendarIcon, CheckCircleIcon, PlusIcon } from "lucide-react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adicionarTarefa, concluirTarefa, getTarefas } from "@/back4app";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const mutation = useMutation({
    mutationFn: adicionarTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  async function handleconcluirTarefaPress(id: any) {
    await concluirTarefa(id);
    queryClient.invalidateQueries({ queryKey: ["tarefas"] });
  }

  const [descricao, setDescricao] = useState("");

  async function handleAdicionarTarefaPress() {
    if (descricao.trim() === "") {
      Alert.alert("Descrição inválida", "Preencha a descrição da tarefa", [
        { text: "OK", onPress: () => { } },
      ]);
      return;
    }
    mutation.mutate({ descricao });
    setDescricao("");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // ajuste se necessário
    >
      <View className="flex-1 items-start p-4 gap-4">
        {(isFetching || mutation.isPending) && <ActivityIndicator size="large" />}

        <View className="flex-row gap-2">
          <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-xl flex-1 flex-row justify-between items-end">
            <View className="gap-4">
              <CalendarIcon color="blue" />
              <Text className=" font-bold">Hoje</Text>
            </View>
            <Text className="">{data?.filter((t: any) => new Date(t.createdAt).toDateString() === new Date().toDateString()).length || 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/tarefas")} className="bg-gray-200 px-4 py-2 rounded-xl flex-1 flex-row justify-between items-end">
            <View className="gap-4">
              <CheckCircleIcon color="blue" />
              <Text className=" font-bold">Concluído</Text>
            </View>
            <Text className="">{data?.filter((t: any) => t.concluida).length || 0}</Text>
          </TouchableOpacity>
        </View>

        <Text className=" text-xl font-bold">Todas as tarefas</Text>
        <View className="gap-2 w-full">
          {data?.map((t: any) => {
            if (t.concluida == true) {
              return null;
            } else {

              return (
                <TouchableOpacity
                  className="bg-gray-200 w-full px-4 py-4 rounded-xl flex-row items-center gap-4"
                  key={t.objectId}
                  onPress={() => handleconcluirTarefaPress(t.objectId)}
                >
                  <View className="w-[20px] h-[20px] border border-black rounded-full" />
                  <Text>{t.descricao}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        {/* Input fixo que sobe com teclado */}
        <View className="w-full flex-row gap-2 mt-auto">
          <TextInput
            className="bg-gray-200 flex-1 px-4 py-4 rounded-xl"
            placeholder="Adicionar tarefa"
            value={descricao}
            onChangeText={setDescricao}
          />
          <TouchableOpacity
            onPress={handleAdicionarTarefaPress}
            className="bg-gray-200 px-4 py-4 rounded-xl flex-row justify-center items-center"
          >
            <PlusIcon />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}