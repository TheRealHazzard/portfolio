// Static files live under the deployment's base path (for example /portfolio on GitHub Pages).
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${BASE}${path}`;
