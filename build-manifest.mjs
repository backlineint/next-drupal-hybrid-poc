import { listFrameworks } from "@netlify/framework-info";

const frameworks = await listFrameworks();

/**
 * This is very POC. Rather than augmenting Netlify's opinions, we'd need to
 * create our own.
 * This data should be sourced from json files in a /frameworks directory.
 */
if (frameworks[0].id === "next") {
  frameworks[0].staticAssetsDirectory = [
    { local: ".next/static", remote: "_next/static" },
    { local: "public", remote: "public" },
  ];
  console.log(JSON.stringify(frameworks[0]));
}
