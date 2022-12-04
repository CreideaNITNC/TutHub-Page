import { productionService } from "@/service/productionService";
import { developService } from "@/service/developService";

export interface Service {
  loadData(): string;
}

export function useService(): Service {
  return import.meta.env.DEV ? developService : productionService;
}
