import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useEffect, useRef } from 'react';

import { clipboardIcons, type ICopyClipboardProps } from './CopyClipboard.config';
import { copyToClipboard } from './copyToClipboard';

const CopyClipboard: FC<ICopyClipboardProps> = ({
  style,
  className,
  classNames = [],
  iconVariant = 'copy',
  iconColor,
}) => {
  // onclick is auto-bound and emitted by useRenderer's connect.
  const { connect } = useRenderer();
  // Cached so the click handler can copy synchronously (clipboard requires a live user gesture).
  const valueRef = useRef<unknown>(null);
  const {
    sources: { datasource: ds },
  } = useSources();

  const isStringSource = ds?.dataType === 'string';
  const Icon = clipboardIcons[iconVariant] ?? clipboardIcons.copy;

  useEffect(() => {
    valueRef.current = null;
    if (!ds || !isStringSource) return;

    const listener = async () => {
      valueRef.current = await ds.getValue();
    };

    listener();
    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
  }, [ds, isStringSource]);

  const handleClick = () => {
    const value = valueRef.current;
    if (!isStringSource || typeof value !== 'string' || value === '') return;
    copyToClipboard(value);
  };

  return (
    <button
      ref={connect}
      type="button"
      style={{ background: 'none', border: 0, padding: 0, color: 'inherit', font: 'inherit', ...style }}
      className={cn(className, classNames)}
      aria-label="Copy to clipboard"
      onClick={handleClick}
    >
      <Icon style={{ color: iconColor }} />
    </button>
  );
};

export default CopyClipboard;
