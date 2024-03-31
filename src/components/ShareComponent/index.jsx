import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Helmet } from "react-helmet";

const ShareComponent = ({ url, title, description, imageUrl }) => {
  return (
    <div className="share-component">
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta property="type" content="website" />
        <meta property="image" content={imageUrl} />
        <meta property="twitter:card" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:description" content={description} />
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta content="image/*" property="og:image:type" />
      </Helmet>
      <FacebookShareButton
        url={url}
        description={description}
        quote={title}
        imageUrl={imageUrl}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
        description={description}
        imageUrl={imageUrl}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        description={description}
        imageUrl={imageUrl}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <InstapaperShareButton
        url={url}
        title={title}
        description={description}
        imageUrl={imageUrl}
      >
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
      <TelegramShareButton
        url={url}
        title={title}
        description={description}
        imageUrl={imageUrl}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
};

export default ShareComponent;
