import PropTypes from "prop-types";

/**
 * Conditionally show children, with an optional fallback component.
 * @param {React.Node} children - child component(s).
 * @param {JSX.Element} fallback - Singleton fallback component.
 * @param {Any} when - Condition to be met in order for children to show..
 * @returns {React.Node|Null} children, fallback, or null, depending on the condition and existence of fallback.
 */
export function Visible ({ children, fallback, when }) {
  if (when) {
    return children;
  } else if ( fallback ) {
    return fallback;
  }

  return null;
}

Visible.propTypes = {
  /* any amount of elements can be supplied as children */
  children: PropTypes.node.isRequired,
  /* If you're using a fallback component, it should be a single JSX element. */
  fallback: PropTypes.element,
  /* when is a condition that will be cast to boolean. The prop type is set to 'any' for null / existential checks as well. */
  when: PropTypes.any.isRequired,
}
