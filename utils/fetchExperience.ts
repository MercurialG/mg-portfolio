import { sanityClient } from "./../sanity";
import { Experience } from "../typings";
import { groq } from "next-sanity";

const query = groq`
 *[_type == "experience"] | order(importance){
  ...,
  technologies[]->
 }
`;

export const fetchExperience = async () => {
  const res = await sanityClient.fetch(query);

  // const data = await res.json();
  const experiences: Experience[] = res;

  return experiences;
};
