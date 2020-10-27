import { Project } from '../../types/Project';
import { TextMuted } from '../ui/content/textMuted';
import { ResponsiveGrid } from '../ui/container/responsiveGrid';
import { CardProject } from '../cards/cardProject/cardProject';
import { useTheme } from '../../context/ThemeContext';

interface SectionProjectsProps {
  projects: Project[];
}

export const SectionProjects: React.FC<SectionProjectsProps> = ({ projects }) => {
  const theme = useTheme();
  return (
    <section>
      <h2>Projekt</h2>
      <TextMuted>För en del projekt används gratis hosting, vilket kan leda till en längre initial laddtid</TextMuted>
      <ResponsiveGrid itemWidth="250px" gutter={theme.spacings.large}>
        {projects.map(({ title, icon, tags: _tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </section>
  );
};

SectionProjects.displayName = 'SectionProjects';
