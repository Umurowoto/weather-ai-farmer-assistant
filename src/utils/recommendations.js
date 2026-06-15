/**
 * Simple rules-based "farming advice engine".
 *
 * Takes today's weather numbers and returns a list of plain-language
 * recommendations a farmer can act on. Each item has:
 *   - icon:    a small emoji shown in the UI
 *   - title:   short headline
 *   - message: one sentence of advice
 */
export function getFarmingAdvice({ temperature, humidity, rainChance }) {
  const advice = [];

  // 1. Irrigation
  if (rainChance >= 70) {
    advice.push({
      icon: "💧",
      title: "Hold off on irrigation",
      message: "Rain is likely soon, so the soil should get natural watering.",
    });
  } else if (temperature >= 30) {
    advice.push({
      icon: "🚿",
      title: "Increase watering",
      message: "It's hot today — crops may need extra water to avoid stress.",
    });
  } else {
    advice.push({
      icon: "🌱",
      title: "Normal irrigation",
      message: "Conditions are moderate — stick to your usual watering schedule.",
    });
  }

  // 2. Disease risk
  if (humidity >= 80) {
    advice.push({
      icon: "🍄",
      title: "Watch for fungal disease",
      message: "High humidity raises the risk of mildew and blight. Inspect leaves closely.",
    });
  }

  // 3. Spraying
  if (rainChance >= 40) {
    advice.push({
      icon: "🚫",
      title: "Delay spraying pesticides",
      message: "Rain may wash sprays away before they take effect. Wait for a drier day.",
    });
  } else {
    advice.push({
      icon: "✅",
      title: "Good day for spraying",
      message: "Dry conditions mean sprays are likely to stay effective.",
    });
  }

  // 4. Planting / harvesting
  if (rainChance < 30 && temperature >= 18 && temperature <= 28) {
    advice.push({
      icon: "🌾",
      title: "Favourable for planting or harvesting",
      message: "Mild, dry conditions are good for fieldwork today.",
    });
  }

  return advice;
}
