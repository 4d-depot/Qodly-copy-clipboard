import config, { type ICopyClipboardProps } from './CopyClipboard.config';
import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './CopyClipboard.build';
import Render from './CopyClipboard.render';

const CopyClipboard: T4DComponent<ICopyClipboardProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

CopyClipboard.craft = config.craft;
CopyClipboard.info = config.info;
CopyClipboard.defaultProps = config.defaultProps;

export default CopyClipboard;
