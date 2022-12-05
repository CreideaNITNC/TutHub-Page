import type TutorialPageJSON from "@/models/json/tutorialPageJSON";

const mockTutorialPageJSON: TutorialPageJSON = {
  userID: "Tanaka",
  repositoryName: "Server-Side Swift Vapor",

  pageNumber: 1,

  pageTitle: "Vaporの環境構築",

  commits: [
    {
      step: 1,
      message: `# Vaporの環境構築
          本章では、Server-Side Swiftのフレームワーク、Vaporを使用するにあたってhomebrewでのVaporのインストールや環境構築を行なっていきます。`,
      codes: [],
      images: [],
    },
  ],
};

export default mockTutorialPageJSON;
