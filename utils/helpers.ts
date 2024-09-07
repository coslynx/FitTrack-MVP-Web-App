import { Platform } from '@social-sharing/social-sharing';

export const generateShareLink = (
  platform: Platform,
  url: string,
  text: string
): string => {
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
    default:
      return url;
  }
};