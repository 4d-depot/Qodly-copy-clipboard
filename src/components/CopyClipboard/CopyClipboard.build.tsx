import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import { clipboardIcons, type ICopyClipboardProps } from './CopyClipboard.config';

const CopyClipboard: FC<ICopyClipboardProps> = ({
  style,
  className,
  classNames = [],
  iconVariant = 'copy',
  iconColor,
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const Icon = clipboardIcons[iconVariant] ?? clipboardIcons.copy;

  return (
    <button
      ref={connect}
      type="button"
      style={{ background: 'none', border: 0, padding: 0, color: 'inherit', font: 'inherit', ...style }}
      className={cn(className, classNames)}
    >
      <Icon style={{ color: iconColor }} />
    </button>
  );
};

export default CopyClipboard;