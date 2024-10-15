import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${URL}/about`,
    },
    {
      url: `${URL}/services`,
    },
    {
      url: `${URL}/contactus`,
    },
    {
      url: `${URL}/products`,
    },
    {
      url: `${URL}/career`,
    },
  ];
}
