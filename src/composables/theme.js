import {useQuasar} from "quasar";
import {useUtilStore} from "stores/util-store";

export function useTheme() {
  const $q = useQuasar();
  const utilStore = useUtilStore();
  const initTheme = () => {
    let dark = JSON.parse(localStorage.getItem("dark"));
    dark = typeof dark === "boolean" ? dark : $q.dark.isActive;
    if (dark !== undefined && dark !== null) {
      utilStore.darkTheme = dark;
      $q.dark.set(dark);
    } else {
      utilStore.darkTheme = true;
      $q.dark.set(false);
    }
  };
  const toggleTheme = (value) => {
    $q.dark.set(!value);
    utilStore.darkTheme = !value;
    localStorage.setItem("dark", JSON.stringify(!value));
  };

  return {initTheme, toggleTheme}
}
