// MDX is used for the language pages. MDX uses the markdown syntax, which is automaticially converted converted to HTML/React code
// The layout that the MDX pages use is defined here
export default function Layout({ children }) {
  return <div className="container mx-auto my-16 max-w-3xl prose">{children}</div>;
}
