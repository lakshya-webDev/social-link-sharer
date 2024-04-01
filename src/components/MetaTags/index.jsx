import React, { useEffect } from "react";

function MetaTags({
  title,
  description,
  ogUrl,
  ogType,
  ogImage,
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterImage,
}) {
  useEffect(() => {
    // Remove existing meta tags
    document
      .querySelectorAll(
        'meta[name^="description"], meta[property^="og:"], meta[name^="twitter:"]'
      )
      .forEach((tag) => tag.remove());

    // Append new meta tags
    const appendMetaTag = (name, content) => {
      const metaTag = document.createElement("meta");
      metaTag.setAttribute("name", name);
      metaTag.setAttribute("content", content);
      document.head.appendChild(metaTag);
    };

    // Append title meta tag
    document.title = title;

    // Append description meta tag
    if (description) {
      appendMetaTag("description", description);
    }

    // Append Open Graph (og) meta tags
    appendMetaTag("og:url", ogUrl);
    appendMetaTag("og:type", ogType);
    appendMetaTag("og:title", title);
    appendMetaTag("og:description", description);
    appendMetaTag("og:image", ogImage);

    // Append Twitter meta tags
    appendMetaTag("twitter:card", twitterCard);
    appendMetaTag("twitter:domain", twitterDomain);
    appendMetaTag("twitter:url", twitterUrl);
    appendMetaTag("twitter:title", title);
    appendMetaTag("twitter:description", description);
    appendMetaTag("twitter:image", twitterImage);

    // Cleanup function to remove meta tags on component unmount
    return () => {
      document
        .querySelectorAll(
          'meta[name^="description"], meta[property^="og:"], meta[name^="twitter:"]'
        )
        .forEach((tag) => tag.remove());
    };
  }, [
    title,
    description,
    ogUrl,
    ogType,
    ogImage,
    twitterCard,
    twitterDomain,
    twitterUrl,
    twitterImage,
  ]);

  return null;
}

export default MetaTags;
