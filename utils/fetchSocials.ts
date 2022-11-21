import { sanityClient } from "./../sanity";
import { Social } from "../typings";
import { groq } from "next-sanity";

const query = groq`
 *[_type == "social"]
`;

export const fetchSocials = async () => {
  const res = await sanityClient.fetch(query);

  const socials: Social[] = res;

  // console.log(socials);

  return socials;
};
