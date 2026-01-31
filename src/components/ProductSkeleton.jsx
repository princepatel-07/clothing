import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => (
  <div className="product-card">
    <Skeleton height={180} />
    <Skeleton count={2} />
  </div>
);

export default ProductSkeleton;
