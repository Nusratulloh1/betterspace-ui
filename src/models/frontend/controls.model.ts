export type Value = number | string;

export interface ControlItem {
  value: Value;
  label: string;
  icon?: string;
}
export interface IBreadcrumb {
  name: string;
  path?: string;
  title: string
  disabled?: boolean;
  dynamic: boolean
  icon: string
}