import { Project } from '../../types/Project';
import { CardProject } from '../cards/cardProject/CardProject';
import { ResponsiveGrid } from '../ui/container/ResponsiveGrid';
import { Header } from '../ui/typography/Header';

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
      <ResponsiveGrid itemWidth="250px" gutter={2}>
        {projects.map(({ title, icon, tags: _tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </section>
  );
};

SectionProjects.displayName = 'SectionProjects';
