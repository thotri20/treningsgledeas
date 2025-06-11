import { title } from "process";
import { defineType } from "sanity";

export const homepage = defineType({
    name: "homepage", 
    title: "hjemmeside",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "hjemmesidetittel"
        }
    ]
})
