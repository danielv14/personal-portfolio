import { CardProject } from 'components/cards/cardProject/cardProject';
import { Project } from 'types/Project';
import { ResponsiveGrid } from 'ui/container/responsiveGrid';
import { Text } from 'ui/content/Text';

interface SectionProjectsProps {
  projects: Project[];
}

export const SectionProjects: React.FC<SectionProjectsProps> = ({ projects }) => {
  return (
    <section>
      <h2>Projekt</h2>
      <Text muted as="h4">
        För en del projekt används gratis hosting, vilket kan leda till en längre initial laddtid
      </Text>
      <ResponsiveGrid itemWidth="250px" gutter={15}>
        {projects.map(({ title, icon, tags: _tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </section>
  );
};

SectionProjects.displayName = 'SectionProjects';
