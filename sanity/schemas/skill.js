export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Skill",
      type: "string",
    },
    {
      name: "linkToSrc",
      title: "LinkToSrc",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
