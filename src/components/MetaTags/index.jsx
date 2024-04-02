import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function MetaTags({ title, description, ogUrl, ogType, ogImage }) {
  useEffect(() => {
    // Update meta tags when component props change
    const updateMetaTags = () => {
      document.title = title;
      const metaTags = [
        { name: "title", content: title },
        { name: "description", content: description || "" },
        { property: "og:type", content: ogType },
        { property: "og:url", content: ogUrl },
        { property: "og:title", content: title },
        { property: "og:description", content: description || "" },
        { property: "og:image", content: ogImage || "" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: window.location.hostname },
        { property: "twitter:url", content: ogUrl },
        { property: "twitter:title", content: title },
        { property: "twitter:description", content: description || "" },
        { property: "twitter:image", content: ogImage || "" },
        // Add other meta tags as needed
      ];

      metaTags.forEach(({ name, property, content }) => {
        const existingTag = document.querySelector(
          name ? `meta[name="${name}"]` : `meta[property="${property}"]`
        );

        if (existingTag) {
          existingTag.setAttribute("content", content);
        } else {
          const newTag = document.createElement("meta");
          if (name) {
            newTag.setAttribute("name", name);
          } else {
            newTag.setAttribute("property", property);
          }
          newTag.setAttribute("content", content);
          document.head.appendChild(newTag);
        }
      });
    };

    updateMetaTags();

    // Cleanup function
    return () => {
      // Remove meta tags when component unmounts
      const metaTags = [
        "title",
        "description",
        "og:type",
        "og:url",
        "og:title",
        "og:description",
        "og:image",
        "twitter:card",
        "twitter:domain",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        // Add other meta tags as needed
      ];
      metaTags.forEach((tagName) => {
        const tag = document.querySelector(
          tagName.startsWith("twitter")
            ? `meta[name^="${tagName}"]`
            : `meta[name="${tagName}"]`
        );
        if (tag) {
          tag.remove();
        }
      });
    };
  }, [title, description, ogUrl, ogType, ogImage]);

  return null; // Meta tags are managed imperatively, no need to render anything
}

export default MetaTags;
