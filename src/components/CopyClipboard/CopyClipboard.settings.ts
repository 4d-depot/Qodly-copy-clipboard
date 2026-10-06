import { ESetting, type TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

// The "Qodly Source" (datasource) setting is provided by DEFAULT_SETTINGS / BASIC_SETTINGS.
const iconSettings: TSetting[] = [
	{
		key: 'iconVariant',
		label: 'Icon',
		type: ESetting.SELECT,
		options: [
			{ value: 'copy', label: 'Copy' },
			{ value: 'outline', label: 'Outline copy' },
			{ value: 'all', label: 'Copy all' },
		],
	},
	{ key: 'iconColor', label: 'Icon color', type: ESetting.COLOR_PICKER },
];

const Settings: TSetting[] = [...iconSettings, ...DEFAULT_SETTINGS];

export const BasicSettings: TSetting[] = [
	...iconSettings,
	...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
