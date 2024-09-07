import { useState } from 'react';
import { SocialShareButton } from '@social-sharing/social-sharing';
import { generateShareLink } from '@/utils/helpers';

interface SocialShareButtonProps {
  url: string;
  text?: string;
}

const SocialShareButtonComponent: React.FC<SocialShareButtonProps> = ({ url, text }) => {
  const [shareText, setShareText] = useState(text || `Check out this awesome workout!`);
  const [shareUrl, setShareUrl] = useState(url);

  const handleShare = (platform: string) => {
    const shareLink = generateShareLink(platform, shareUrl, shareText);
    SocialShareButton.share(shareLink);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => handleShare('twitter')}>
        <span className="text-gray-500 hover:text-gray-700">Share on Twitter</span>
      </button>
      <button onClick={() => handleShare('facebook')}>
        <span className="text-gray-500 hover:text-gray-700">Share on Facebook</span>
      </button>
    </div>
  );
};

export default SocialShareButtonComponent;