import { TSkill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();
  const skills: TSkill[] = data.skills;

  return skills;
};
