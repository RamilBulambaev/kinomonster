import { DerectionType, SkeletonType } from "../interface/type";
import Skeleton from "../ui/Skeleton/Skeleton";

export interface Props {
  isLoading: boolean;
  direction?: DerectionType;
  type?: SkeletonType;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count?: number,
  type?: SkeletonType,
  direction?: DerectionType
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;

    if (!isLoading) {
      return <Component type={type} {...(restProps as P)} />;
    }
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
  };
}

export default withSkeleton;
