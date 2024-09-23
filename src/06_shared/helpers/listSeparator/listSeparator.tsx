export const listSeparator = (
  index: number,
  length: number,
  key: string,
  value: string
) => {
  return index !== length ? (
    <span key={key}>{`${value}, `}</span>
  ) : (
    <span key={key}>{value}</span>
  );
};
