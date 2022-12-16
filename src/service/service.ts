import { productionService } from "@/service/productionService";
import { developService } from "@/service/developService";
import type TutorialPageData from "@/models/data/tutorialPageData";

export interface Service {
  loadData(
    user: string,
    repository: string,
    page: number
  ): Promise<TutorialPageData>;
}

export function useService(): Service {
  return import.meta.env.DEV ? developService : productionService;
}
