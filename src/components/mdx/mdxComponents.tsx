import { EmojiList } from 'ui/content/emojiList';
import { FunText } from 'ui/content/funText';
import { customImageComponent } from './customImageComponent';
import { customLinkComponent } from './customLinkComponent';
import { customQuoteComponent } from './customQuoteComponent';

export const mdxComponents = {
  a: customLinkComponent,
  img: customImageComponent,
  blockquote: customQuoteComponent,
  EmojiList: EmojiList,
  FunText: FunText,
};
