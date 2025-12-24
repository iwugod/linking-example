import { Link, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import data from "../../data";
import { Image } from "expo-image";

export default function ProductDetailsScreen() {
  const params = useLocalSearchParams();
  const productId = params?.productId;
  const isSale = params?.sale === "true";
  const product = data.find((product) => product.id === productId);
  const { width } = useWindowDimensions();

  if (!product) {
    return (
      <View style={{ alignItems: "center", marginTop: 96 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 16 }}>Not found</Text>
        <Text style={{ marginBottom: 24 }}>
          Could not find product with ID <Text style={{ fontWeight: "bold" }}>{productId}</Text>
        </Text>
        <Link href="/products" asChild>
          <Pressable style={{ backgroundColor: "#000", borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>View Other Products</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", paddingHorizontal: 16 }}>
      <View style={{ flexDirection: Platform.OS === "web" ? "row" : "column", maxWidth: 1024, marginTop: Platform.OS === "web" ? 24 : 0 }}>
        <Image
          source={product.imageSource}
          style={Platform.OS !== "web" ? { height: 400, width } : { height: 400, width: 500 }}
        />
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{product.name}</Text>
          {isSale ? (
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={{ color: "#f87171", textDecorationLine: "line-through", fontSize: 18, marginBottom: 12 }}>${product.price}.00</Text>
              <Text style={{ color: "#4b5563", fontSize: 18, marginBottom: 12, fontWeight: "bold" }}>${product.price - 5}.00</Text>
            </View>
          ) : (
            <Text style={{ color: "#6b7280", fontSize: 18, marginBottom: 12 }}>${product.price}.00</Text>
          )}
          <Text style={{ lineHeight: 28, fontSize: 16, marginBottom: 16 }}>{product.description}</Text>
          <Pressable style={{ backgroundColor: "#000", borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8 }} onPress={() => alert("Added!")}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}
