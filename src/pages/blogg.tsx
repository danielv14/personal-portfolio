import { PostListItem } from '../components/postListItem/postListItem';
import { Seo } from '../components/seo/seo';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { TextCenter } from '../components/ui/content/textCenter';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginMedium } from '../components/ui/margins/marginMedium';
import { useContent } from '../context/ContentContext';
import { HeadingMuted } from '../components/ui/content/headingMuted';
import { Column } from '../components/ui/container/column';

const blogIndex = () => {
  const { blogPosts } = useContent();
  return (
    <>
      <Seo title="Blogg" />
      <ResponsiveContainer>
        <Column>
          <MarginLarge />
          <TextCenter>
            <h1>Alla inlägg</h1>
            <HeadingMuted as="h5">
              Då och då skriver jag ned några tankar, dokumenterar upptäckter eller skriver enklare guider.
            </HeadingMuted>
          </TextCenter>
          <MarginLarge />
          {blogPosts.map((blogPost) => (
            <UnstyledInternalLink key={blogPost.title} href={blogPost.url}>
              <div>
                <PostListItem {...blogPost} />
                <MarginMedium />
              </div>
            </UnstyledInternalLink>
          ))}
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default blogIndex;
