import { FlatList, Platform, ScrollView, Text, View } from "react-native";
import data from "../../data";
import { ProductCard } from "../../components/ProductCard";

export default function ProductListScreen() {
  if (Platform.OS === "web") {
    return (
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View
          style={{
            width: "100%",
            maxWidth: 1280,
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          }}
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
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard item={item} />}
      ListFooterComponent={
        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 16 }}>
          <Text style={{ color: "gray", fontStyle: "italic" }}>{""}</Text>
        </View>
      }
    />
  );
}
