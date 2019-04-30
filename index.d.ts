/// <reference types="@types/react" />

declare function Visible(
  when: any,
  children: React.ReactNode,
  fallback?: React.ReactElement<any>
): React.ReactNode;

export = Visible;
