// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Prompt: {
      id: "kjzl6hvfrbw6c7p47b4cawfquvdjyre3rwb8zn8vq52ap20lnyb2t7wagulb7xx",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    Prompt: {
      text: { type: "string", required: true },
      title: { type: "string", required: true },
      exampleInput: { type: "string", required: false },
      exampleOutput: { type: "string", required: false },
      author: { type: "view", viewType: "documentAccount" },
      version: { type: "view", viewType: "documentVersion" },
    },
  },
  enums: {},
  accountData: { promptList: { type: "connection", name: "Prompt" } },
};
