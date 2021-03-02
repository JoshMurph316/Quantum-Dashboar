import { HealthHistory } from '../health-appraisal-questionnaire/health-history-form/health-history.model';
import { HAQForm } from '../health-appraisal-questionnaire/haq-form/haq-form.model';
import { NutritionImmune } from '../health-appraisal-questionnaire/nutrition-immune-form/nutrition-immune.model';

export interface User {
  $id?: string;
  email?: string;
  healthHistory?: HealthHistory;
  haqForm?: HAQForm;
  nutritionImmune?: NutritionImmune;
}
