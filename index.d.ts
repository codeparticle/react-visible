/// <reference types="@types/react" />

declare function Visible(
  when: any,
  children: React.ReactChildren,
  fallback?: React.ReactElement<any>
): React.ReactNode;

export = Visible;
