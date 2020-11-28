import { PostListItem } from '../components/postListItem/postListItem';
import { Seo } from '../components/seo/seo';
import { Column } from '../components/ui/container/column';
import { ResponsiveContainer } from '../components/ui/container/responsiveContainer';
import { Header } from '../components/ui/content/header';
import { TextCenter } from '../components/ui/content/textCenter';
import { UnstyledInternalLink } from '../components/ui/content/unstyledLink';
import { MarginLarge } from '../components/ui/margins/marginLarge';
import { MarginSmall } from '../components/ui/margins/marginSmall';
import { useContent } from '../context/ContentContext';

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
            <Header muted as="h5">
              Då och då skriver jag ned några tankar, dokumenterar upptäckter eller skriver om lite allt möjligt.
            </Header>
          </TextCenter>
          <MarginLarge />
          {blogPosts.map((blogPost) => (
            <UnstyledInternalLink key={blogPost.title} href={blogPost.url}>
              <div>
                <PostListItem {...blogPost} />
                <MarginSmall />
              </div>
            </UnstyledInternalLink>
          ))}
        </Column>
      </ResponsiveContainer>
    </>
  );
};

export default blogIndex;
