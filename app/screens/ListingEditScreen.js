import React from "react";
import Screen from "../components/customComponents/Screen";
import {
  AppForm,
  AppFormField,
  AppPickerField,
  SubmitButton,
} from "../components/customComponents/forms";

import { object, string, number } from "yup";
import CategoryPickerItem from "../components/customComponents/CategoryPickerItem";

const validationSchema = object({
  title: string().required().min(1).label("Title"),
  price: number().required().min(1).label("Price").min(999).max(999999),
  category: object().nullable().required().label("Category"),
  description: string().required().label("Description"),
});

const options = [
  { label: "Fans", value: 1, backgroundColor: "pink", icon: "ceiling-fan" },
  { label: "T.V", value: 2, backgroundColor: "dodgerblue", icon: "television" },
  { label: "Mattress", value: 3, backgroundColor: "orange", icon: "bed-empty" },
  { label: "Tables", value: 4, backgroundColor: "tomato", icon: "table-furniture" },
  { label: "Sofas", value: 6, backgroundColor: "green", icon: "sofa" },
  { label: "Chairs", value: 6, backgroundColor: "grey", icon: "chair-rolling" },

  { label: "Music", value: 7, backgroundColor: "violet", icon: "music" },
  { label: "Games", value: 8, backgroundColor: "indigo", icon: "gamepad" },
  { label: "More", value: 9, backgroundColor: "teal", icon: "skew-more" },
  // { label: "Mattress", value: 3, backgroundColor: "dodgerblue", icon: "key" },
  // { label: "Tables", value: 5, backgroundColor: "dodgerblue", icon: "key" },
  // { label: "Bed sheets", value: 4, backgroundColor: "dodgerblue", icon: "key" },
  // { label: "Ceiling lights", value: 6,backgroundColor: "dodgerblue", icon: "key" },
];

function ListingEditScreen() {
  return (
    <Screen style={{ padding: 20 }}>
      <AppForm
        initialValues={{ title: "", price: "", category: null, description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          fieldName={"title"}
          placeholder="Titile"
          maxLength={255}
          autoCorrect={false}
        />
        <AppPickerField
          placeholder={"Category"}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          options={options}
          fieldName={"category"}
          width="50%"
        />
        <AppFormField
          fieldName={"price"}
          maxLength={6}
          placeholder="Price"
          autoCorrect={false}
          keyboardType="number-pad"
          width="50%"
        />
        <AppFormField
          fieldName={"description"}
          placeholder="Description"
          autoCorrect={false}
          multiline
          numberOfLines={2}
          maxLength={255}
        />

        <SubmitButton buttonText={"post"} style={{marginTop: 40}}/>
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
