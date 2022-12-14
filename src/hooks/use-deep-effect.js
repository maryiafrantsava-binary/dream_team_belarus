import * as React from 'react';
import { isDeepEqual } from 'utils';

// Note: Do not use this effect on huge objects or objects with
// circular references as performance may suffer.
export const useDeepEffect = (callback, dependencies) => {
    const prev_dependencies = React.useRef(null);

    if (!isDeepEqual(prev_dependencies, dependencies)) {
        prev_dependencies.current = dependencies;
        callback();
    }
};
