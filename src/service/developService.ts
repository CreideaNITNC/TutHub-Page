import type { Service } from "@/service/service";
import TutorialPageData from "@/models/data/tutorialPageData";
import mockTutorialPageJSON from "@/mocks/mockTutorialPageJSON";

class DevelopService implements Service {
  async loadData(): Promise<TutorialPageData> {
    return TutorialPageData.decode(mockTutorialPageJSON);
  }
}

export const developService = new DevelopService();
