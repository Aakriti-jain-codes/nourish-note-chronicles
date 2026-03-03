import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEO = ({
  title = "NourishNote — Nutrition & Wellness Blog",
  description = "Discover nutritious recipes, healthy habits, and evidence-based nutrition insights to fuel a healthier lifestyle.",
  path = "/",
}: SEOProps) => {
  const siteUrl = "https://nourishnote.app";
  const full = path === "/" ? title : `${title} | NourishNote`;

  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
