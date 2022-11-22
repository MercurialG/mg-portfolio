import { sanityClient } from "./../sanity";
import { TSkill } from "../typings";
import { groq } from "next-sanity";

const query = groq`
 *[_type == "skill"]| order(_createdAt asc)
`;
export const fetchSkills = async () => {
  const res = await sanityClient.fetch(query);

  const skills: TSkill[] = res;

  return skills;
};
