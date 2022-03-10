import React from 'react'

export type VisibleProps = {
  fallback?: React.ReactNode,
  when?: any
};
/**
 * Conditionally show children, with an optional fallback component.
 * @param {React.Node} children - child component(s).
 * @param {React.ReactNode} fallback - Singleton fallback component.
 * @param {Any} when - Condition to be met in order for children to show..
 * @returns {React.Node|Null} children, fallback, or null, depending on the condition and existence of fallback.
 */
export const Visible: React.FC<VisibleProps> = ({
  children,
  fallback,
  when
}) => {
  if (when) {
    return <>{children}</>;
  } else if (fallback) {
    return <>{fallback}</>;
  }
  return null;
};
