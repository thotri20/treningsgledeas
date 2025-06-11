import { groq } from "next-sanity";

export const homepagequery = groq`
*[_type == "homepage"][0] {
  title
}`