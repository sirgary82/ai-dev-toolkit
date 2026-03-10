/**
 * Remark plugin that prefixes all absolute internal links with the site base path.
 * Fixes MDX content links when deploying to a GitHub Pages subpath.
 */
export function remarkPrefixLinks(options) {
  const base = (options?.base || '').replace(/\/$/, '');
  if (!base) return () => {};

  return function (tree) {
    walk(tree, (node) => {
      if (
        node.type === 'link' &&
        typeof node.url === 'string' &&
        node.url.startsWith('/') &&
        !node.url.startsWith(base + '/')
      ) {
        node.url = base + node.url;
      }
    });
  };
}

function walk(node, fn) {
  fn(node);
  if (Array.isArray(node.children)) {
    node.children.forEach((child) => walk(child, fn));
  }
}
