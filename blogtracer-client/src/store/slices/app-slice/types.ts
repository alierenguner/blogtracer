import { Themes } from "@shared/global/enums";
import { Nullable } from "@shared/global/types";

// Initial state types
export type AppLanguage = Nullable<string>;
export type AppTheme = Nullable<Themes>;
export type AppLocation = Nullable<string>;