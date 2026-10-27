import type { Locale, Period, Translated } from "~/types/cv";
import { formatPeriod, type PeriodWords } from "~/utils/period";

function isLocale(value: string): value is Locale {
  return value === "de" || value === "en";
}

/** Resolves content text and periods for the active locale. */
export function useTranslated() {
  const { locale, t } = useI18n();

  const tr = (value: Translated): string => value[isLocale(locale.value) ? locale.value : "en"];

  const periodWords = computed<PeriodWords>(() => ({
    today: t("period.today"),
    year: t("period.year"),
    years: t("period.years"),
    month: t("period.month"),
    months: t("period.months"),
  }));

  const period = (value: Period, options?: { withLength?: boolean }) =>
    formatPeriod(value, periodWords.value, options);

  return { tr, period };
}
