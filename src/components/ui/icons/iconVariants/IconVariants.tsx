import { MouseEventHandler } from 'react';
import { IconVariant } from 'types/icon/icons';
import { Svg } from '../../svg/Svg';

export interface SVGIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
}

type IconVariants = Record<IconVariant, (props: SVGIconProps) => JSX.Element>;

const SVGIcon: React.FC<SVGIconProps> = ({ children, ...rest }) => (
  <Svg
    viewBox="0 0 24 24"
    height="24px"
    width="24px"
    {...rest}
    css={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'hidden', fill: '$textMutedColor' }}
  >
    {children}
  </Svg>
);

const IconSun = (props: SVGIconProps) => (
  <SVGIcon {...props}>
    <path
      d="M12 6a1 1 0 001-1V3a1 1 0 00-2 0v2a1 1 0 001 1zM21 11h-2a1 1 0 000 2h2a1 1 0 000-2zM6 12a1 1 0 00-1-1H3a1 1 0 000 2h2a1 1 0 001-1zM6.22 5a1 1 0 00-1.39 1.47l1.44 1.39a1 1 0 00.73.28 1 1 0 00.72-.31 1 1 0 000-1.41zM17 8.14a1 1 0 00.69-.28l1.44-1.39A1 1 0 0017.78 5l-1.44 1.42a1 1 0 000 1.41 1 1 0 00.66.31zM12 18a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zM17.73 16.14a1 1 0 00-1.39 1.44L17.78 19a1 1 0 00.69.28 1 1 0 00.72-.3 1 1 0 000-1.42zM6.27 16.14l-1.44 1.39a1 1 0 000 1.42 1 1 0 00.72.3 1 1 0 00.67-.25l1.44-1.39a1 1 0 00-1.39-1.44zM12 8a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z"
      data-name="sun"
    />
  </SVGIcon>
);

const IconMoon = (props: SVGIconProps) => (
  <SVGIcon {...props}>
    <path
      d="M12.3 22h-.1a10.31 10.31 0 01-7.34-3.15 10.46 10.46 0 01-.26-14 10.13 10.13 0 014-2.74 1 1 0 011.06.22 1 1 0 01.24 1 8.4 8.4 0 001.94 8.81 8.47 8.47 0 008.83 1.94 1 1 0 011.27 1.29A10.16 10.16 0 0119.6 19a10.28 10.28 0 01-7.3 3zM7.46 4.92a7.93 7.93 0 00-1.37 1.22 8.44 8.44 0 00.2 11.32A8.29 8.29 0 0012.22 20h.08a8.34 8.34 0 006.78-3.49A10.37 10.37 0 017.46 4.92z"
      data-name="moon"
    />
  </SVGIcon>
);

const IconGitHub = (props: SVGIconProps) => (
  <SVGIcon {...props}>
    <path
      d="M16.24 22a1 1 0 01-1-1v-2.6a2.15 2.15 0 00-.54-1.66 1 1 0 01.61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 00-.67-2.22 2.75 2.75 0 01-.41-2.06 3.71 3.71 0 000-1.41 7.65 7.65 0 00-2.09 1.09 1 1 0 01-.84.15 10.15 10.15 0 00-5.52 0 1 1 0 01-.84-.15 7.4 7.4 0 00-2.11-1.09 3.52 3.52 0 000 1.41 2.84 2.84 0 01-.43 2.08 4.07 4.07 0 00-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 01.82.66 1 1 0 01-.21 1 2.06 2.06 0 00-.55 1.56V21a1 1 0 01-2 0v-.57a6 6 0 01-5.27-2.09 3.9 3.9 0 00-1.16-.88 1 1 0 11.5-1.94 4.93 4.93 0 012 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 01.23-1.58c-2.06-.52-5-2-5-7a6 6 0 011-3.33.85.85 0 00.13-.62 5.69 5.69 0 01.33-3.21 1 1 0 01.63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 015.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 01.63.57 5.71 5.71 0 01.33 3.22.75.75 0 00.11.57 6 6 0 011 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 01.22 1.67V21a1 1 0 01-.94 1z"
      data-name="github"
    />
  </SVGIcon>
);

const IconEmail = (props: SVGIconProps) => (
  <SVGIcon {...props}>
    <path
      d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 01-1-1V7.25l7.4 5.55a1 1 0 00.6.2 1 1 0 00.6-.2L20 7.25V17a1 1 0 01-1 1z"
      data-name="email"
    />
  </SVGIcon>
);

export const iconVariants: IconVariants = {
  Github: IconGitHub,
  Moon: IconMoon,
  Sun: IconSun,
  Email: IconEmail,
};
