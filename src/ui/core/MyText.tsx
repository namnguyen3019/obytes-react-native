import { Text } from 'react-native';

export function MyText({
  bold,
  italic = false,
  lineThrough = false,
  children,
  ...props
}: {
  bold: boolean;
  italic: boolean;
  lineThrough: boolean;
  children: any;
}): JSX.Element {
  const classNames = [];

  if (bold) classNames.push('font-bold');
  if (italic) classNames.push('italic');
  if (lineThrough) classNames.push('line-through');

  return (
    <Text className={classNames.join(' ')} {...props}>
      {children}
    </Text>
  );
}
