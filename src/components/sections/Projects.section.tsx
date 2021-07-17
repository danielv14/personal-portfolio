import { Project } from '../../types/Project';
import { CardProject } from '../cards/CardProject';
import { ResponsiveGridContainer } from '../ui-system/container/ResponsiveGridContainer';
import { Header } from '../ui-system/typography/Header';

interface SectionProjectsProps {
  projects: Project[];
}

export const SectionProjects: React.FC<SectionProjectsProps> = ({ projects }) => {
  return (
    <section>
      <h2>Projekt</h2>
      <Header muted as="h4">
        För en del projekt används gratis hosting, vilket kan leda till en längre initial laddtid
      </Header>
      <ResponsiveGridContainer itemWidth="250px" gutter={2}>
        {projects.map(({ title, icon, tags: _tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGridContainer>
    </section>
  );
};

SectionProjects.displayName = 'SectionProjects';
