import type { Service } from "@/service/service";
import type TutorialPageData from "@/models/data/tutorialPageData";

class ProductionService implements Service {
  async loadData(): Promise<TutorialPageData> {
    throw new Error("未実装");
  }
}

export const productionService = new ProductionService();
