import { productionService } from "@/service/productionService";
import { developService } from "@/service/developService";
import type TutorialPageData from "@/models/data/tutorialPageData";

export interface Service {
  loadData(): Promise<TutorialPageData>;
}

export function useService(): Service {
  return import.meta.env.DEV ? developService : productionService;
}
