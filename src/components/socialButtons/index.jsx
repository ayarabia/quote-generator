import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
function SocialButtons(props) {
  const quote=props.quote
  return (
    <div className="socialButtons">
      <FacebookShareButton
        url={"https://www.example.com"}
        quote={quote}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://www.example.com"}
        title ={quote}
        hashtag="#muo"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        url={"https://www.example.com"}
        body ={quote}
        hashtag="#muo"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <LinkedinShareButton
        url={"https://www.example.com"}
        quote={quote}
        hashtag="#muo"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TelegramShareButton
        url={"https://www.example.com"}
        title={quote}
       >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton
        url={"https://www.example.com"}
        title={quote}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}

export default SocialButtons;
