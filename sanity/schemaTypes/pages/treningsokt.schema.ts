import { defineType } from "sanity";

export const treningsokt = defineType({
  name: "treningsokt",
  title: "Treningsøkt",
  type: "document",
  fields: [
    {
      name: "date",
      type: "date",
      title: "Dato",
      validation: Rule => Rule.required(),
    },
    {
      name: "time",
      type: "string",
      title: "Klokkeslett",
      validation: Rule => Rule.required(),
    },
    {
      name: "locationType",
      type: "string",
      title: "Inne/Ute",
      options: {
        list: [
          { title: "Inne", value: "inne" },
          { title: "Ute", value: "ute" },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "availableSpots",
      type: "number",
      title: "Ledige plasser",
      validation: Rule => Rule.required().min(1),
    },
    {
      name: "weather",
      type: "string",
      title: "Vær",
    },
  ],
  preview: {
    select: {
      title: "date",
      subtitle: "time",
    },
    prepare({ title, subtitle }) {
      return {
        title: title
          ? new Date(title).toLocaleDateString("no-NO")
          : "Uten dato",
        subtitle,
      };
    },
  },
});