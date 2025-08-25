export enum MealType {
  BREAKFAST,
  LUNCH,
  DINNER,
  SNACK,
  DESSERT,
}

export enum Cuisine {
  VIETNAMESE,
  JAPANESE,
  KOREAN,
  CHINESE,
  THAI,
  INDIAN,
  EUROPEAN,
  AMERICAN,
  MEXICAN,
}

export enum Occasions {
  PARTY,
  BIRTHDAY,
  HOLIDAY,
  VEGETARIAN_DAY,
  WEATHER_BASED_FOOD,
}

export enum DietaryPreferences {
  VEGETARIAN,
  VEGAN,
  KETO_LOW_CARB,
  FUNCTIONAL_FOOD,
  GLUTEN_FREE,
  WEIGHT_LOSS,
}

export enum MainIngredients {
  CHICKEN,
  BEEF,
  PORK,
  SEAFOOD,
  EGG,
  VEGETABLES,
  TOFU,
}

export enum CookingMethod {
  FRY,
  GRILL,
  STEAM,
  STIR_FRY,
  BOIL,
  SIMMER,
  SOUP,
}

export enum TimeBased {
  UNDER_15_MIN,
  MIN_15_TO_30,
  OVER_1_HOUR,
}

export enum DifficultyLevel {
  EASY,
  MEDIUM,
  HARD,
}

export const MealTypeLabels: Record<MealType, string> = {
  [MealType.BREAKFAST]: "Bữa sáng",
  [MealType.LUNCH]: "Bữa trưa",
  [MealType.DINNER]: "Bữa tối",
  [MealType.SNACK]: "Ăn nhẹ",
  [MealType.DESSERT]: "Tráng miệng",
};

export const CuisineLabels: Record<Cuisine, string> = {
  [Cuisine.VIETNAMESE]: "Việt Nam",
  [Cuisine.JAPANESE]: "Nhật Bản",
  [Cuisine.KOREAN]: "Hàn Quốc",
  [Cuisine.CHINESE]: "Trung Quốc",
  [Cuisine.THAI]: "Thái Lan",
  [Cuisine.INDIAN]: "Ấn Độ",
  [Cuisine.EUROPEAN]: "Châu Âu",
  [Cuisine.AMERICAN]: "Mỹ",
  [Cuisine.MEXICAN]: "Mexico",
};

export const OccasionsLabels: Record<Occasions, string> = {
  [Occasions.PARTY]: "Tiệc tùng",
  [Occasions.BIRTHDAY]: "Sinh nhật",
  [Occasions.HOLIDAY]: "Ngày lễ",
  [Occasions.VEGETARIAN_DAY]: "Ngày ăn chay",
  [Occasions.WEATHER_BASED_FOOD]: "Món theo thời tiết",
};

export const DietaryPreferencesLabels: Record<DietaryPreferences, string> = {
  [DietaryPreferences.VEGETARIAN]: "Ăn chay",
  [DietaryPreferences.VEGAN]: "Thuần chay",
  [DietaryPreferences.KETO_LOW_CARB]: "Keto / Ít carb",
  [DietaryPreferences.FUNCTIONAL_FOOD]: "Thực phẩm chức năng",
  [DietaryPreferences.GLUTEN_FREE]: "Không gluten",
  [DietaryPreferences.WEIGHT_LOSS]: "Giảm cân",
};

export const MainIngredientsLabels: Record<MainIngredients, string> = {
  [MainIngredients.CHICKEN]: "Gà",
  [MainIngredients.BEEF]: "Bò",
  [MainIngredients.PORK]: "Heo",
  [MainIngredients.SEAFOOD]: "Hải sản",
  [MainIngredients.EGG]: "Trứng",
  [MainIngredients.VEGETABLES]: "Rau củ",
  [MainIngredients.TOFU]: "Đậu hũ",
};

export const CookingMethodLabels: Record<CookingMethod, string> = {
  [CookingMethod.FRY]: "Chiên",
  [CookingMethod.GRILL]: "Nướng",
  [CookingMethod.STEAM]: "Hấp",
  [CookingMethod.STIR_FRY]: "Xào",
  [CookingMethod.BOIL]: "Luộc",
  [CookingMethod.SIMMER]: "Kho / Rim",
  [CookingMethod.SOUP]: "Nấu canh / Soup",
};

export const TimeBasedLabels: Record<TimeBased, string> = {
  [TimeBased.UNDER_15_MIN]: "Dưới 15 phút",
  [TimeBased.MIN_15_TO_30]: "15 - 30 phút",
  [TimeBased.OVER_1_HOUR]: "Trên 1 giờ",
};

export const DifficultyLevelLabels: Record<DifficultyLevel, string> = {
  [DifficultyLevel.EASY]: "Dễ",
  [DifficultyLevel.MEDIUM]: "Trung bình",
  [DifficultyLevel.HARD]: "Khó",
};
