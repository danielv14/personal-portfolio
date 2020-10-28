import { MarginComponent, MarginComponentProps } from './margin.styles';


export const Margin: React.FC<MarginComponentProps> = (props) => {
  return (
    <MarginComponent {...props} />
  );
};

Margin.displayName = 'Margin';
