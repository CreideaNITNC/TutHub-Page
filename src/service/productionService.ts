import type { Service } from "@/service/service";
import TutorialPageData from "@/models/data/tutorialPageData";

class ProductionService implements Service {
  async loadData(
    user: string,
    repository: string,
    page: number
  ): Promise<TutorialPageData> {
    const response = await fetch(
      `https://tuthub-api.top/page/${user}/${repository}/${page}`
    );
    const jsonObject = await response.json();
    return TutorialPageData.decode(jsonObject);
  }
}

export const productionService = new ProductionService();
