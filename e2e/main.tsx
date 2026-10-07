import ReactDOM from 'react-dom';

import CopyClipboard from '../src/components/CopyClipboard/CopyClipboard.render';

type E2EWindow = Window & {
  __COPY_CLIPBOARD_E2E_SOURCE__?: { dataType: unknown; value: unknown } | null;
};

const params = new URLSearchParams(window.location.search);
const typeParam = params.get('dataType');
const valueParam = params.get('value');
const dataType = typeParam === '__undefined__' ? undefined : (typeParam ?? 'string');
const value =
  valueParam === '__null__'
    ? null
    : valueParam === '__undefined__'
      ? undefined
      : valueParam === '__number__'
        ? 42
        : (valueParam ?? 'e2e source text');

(window as E2EWindow).__COPY_CLIPBOARD_E2E_SOURCE__ =
  params.get('binding') === 'missing' ? null : { dataType, value };

ReactDOM.render(<CopyClipboard />, document.getElementById('root'));
