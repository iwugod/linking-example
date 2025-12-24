import { FlatList, Platform, ScrollView, Text, View } from "react-native";
import data from "../../../data";
import { ProductCard } from "../../../components/ProductCard";

export default function ProductListScreen() {
  if (Platform.OS === "web") {
    return (
      <ScrollView className="items-center">
        <View
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl"
          }
        >
          {data.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductCard item={item} />}
      ListFooterComponent={
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 16 }}>
          <Text style={{ color: 'gray', fontStyle: 'italic' }}>
            {process.env.EXPO_PUBLIC_TEST_VAR || "Test"}
          </Text>
        </View>
      }
    />
  );
}
