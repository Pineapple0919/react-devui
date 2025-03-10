import { useCustomContext, useComponentConfig, usePrefixConfig } from '../../hooks';
import { getClassName } from '../../utils';
import { DDropContext } from './Drop';

export type DDragPlaceholderProps = React.HTMLAttributes<HTMLDivElement>;

export function DDragPlaceholder(props: DDragPlaceholderProps) {
  const { className, ...restProps } = useComponentConfig(DDragPlaceholder.name, props);

  //#region Context
  const dPrefix = usePrefixConfig();
  const [{ dropDirection }] = useCustomContext(DDropContext);
  //#endregion

  return (
    <div
      {...restProps}
      className={getClassName(className, `${dPrefix}drag-placeholder`, {
        [`${dPrefix}drag-placeholder--horizontal`]: dropDirection === 'horizontal',
      })}
    ></div>
  );
}
