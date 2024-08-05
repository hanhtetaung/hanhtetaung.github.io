
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}