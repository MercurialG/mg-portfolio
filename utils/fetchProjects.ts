import { sanityClient } from "./../sanity";
import { Project } from "../typings";
import { groq } from "next-sanity";

const query = groq`
 *[_type == "project"] {
  ...,
  technologies[]->
 }
`;

export const fetchProjects = async () => {
  const res = await sanityClient.fetch(query);

  const projects: Project[] = res;

  return projects;
};
