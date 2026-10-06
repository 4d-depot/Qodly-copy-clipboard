import { EComponentKind, type T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { FaRegCopy } from 'react-icons/fa';
import { MdContentCopy, MdCopyAll } from 'react-icons/md';

import CopyClipboardSettings, { BasicSettings } from './CopyClipboard.settings';

export const clipboardIcons = {
  copy: MdContentCopy,
  outline: FaRegCopy,
  all: MdCopyAll,
};

export default {
  craft: {
    displayName: 'CopyClipboard',
    kind: EComponentKind.BASIC,
    props: {
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(CopyClipboardSettings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: {
      keys: ['datasource'],
      all: false,
    },
  },
  info: {
    settings: CopyClipboardSettings,
    displayName: 'CopyClipboard',
    exposed: true,
    icon: MdContentCopy,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    iconVariant: 'copy',
    style: {
      width: 'fit-content',
      cursor: 'pointer',
      fontSize: '24px',
    },
  },
} as T4DComponentConfig<ICopyClipboardProps>;

export interface ICopyClipboardProps extends webforms.ComponentProps {
  iconVariant?: keyof typeof clipboardIcons;
  iconColor?: string;
}
