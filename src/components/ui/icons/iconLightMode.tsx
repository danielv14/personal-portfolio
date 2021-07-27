import { Icon } from './Icon';
import { IconComponentProps } from './iconBase/iconBase';

export const IconLightMode: React.FC<IconComponentProps> = (props) => <Icon variant="Sun" {...props} />;

IconLightMode.displayName = 'IconLightMode';
