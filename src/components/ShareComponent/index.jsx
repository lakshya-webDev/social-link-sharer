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

const ShareComponent = ({ url, title, description, onCLick }) => {
  return (
    <div className="share-component">
      <FacebookShareButton
        url={url}
        description={description}
        quote={title}
        onClick={onCLick}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
        description={description}
        onClick={onCLick}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        description={description}
        onClick={onCLick}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <InstapaperShareButton
        url={url}
        title={title}
        description={description}
        onClick={onCLick}
      >
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
      <TelegramShareButton
        url={url}
        title={title}
        description={description}
        onClick={onCLick}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
};

export default ShareComponent;
