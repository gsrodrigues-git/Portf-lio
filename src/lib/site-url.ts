function normalizeUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

export function getSiteUrl() {
  const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (publicUrl) {
    return normalizeUrl(publicUrl);
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();

  if (vercelUrl) {
    return normalizeUrl(vercelUrl);
  }

  return "https://portf-lio-tec14.vercel.app";
}
