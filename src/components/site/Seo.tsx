import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

export function Seo({ title, description, ogTitle, ogDescription }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={ogTitle ?? title} />
      {(ogDescription ?? description) && (
        <meta property="og:description" content={ogDescription ?? description!} />
      )}
    </Helmet>
  );
}
