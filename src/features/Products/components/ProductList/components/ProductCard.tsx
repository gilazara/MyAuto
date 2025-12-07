import type { Product } from '@/features/Products/types/types';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 max-w-3xl mx-auto font-sans">
      <div className="flex">
        <img
          src="https://your-image-url.com/car.jpg" // replace with your actual image path
          alt="Land Rover Range Rover Evoque"
          className="w-36 h-28 object-cover rounded-lg"
        />

        <div className="flex-1 ml-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg font-semibold leading-tight">
              LAND ROVER Range Rover Evoque
            </span>
            <span className="text-gray-400 text-sm ml-2">2013 წ</span>
          </div>

          <div className="flex gap-8 mt-2 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <circle cx="8" cy="8" r="7" strokeWidth="2" />
              </svg>
              1.8 დტ. ჰიბრიდი
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <path d="M2 8a6 6 0 1112 0a6 6 0 01-12 0z" />
              </svg>
              200 000 კმ
            </span>
          </div>

          <div className="flex gap-8 mt-2 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <rect
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  rx="2"
                  strokeWidth="2"
                />
              </svg>
              ატომატიკა
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor">
                <circle cx="8" cy="8" r="6" />
                <path d="M8 2v12" />
              </svg>
              მარჩევანა
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between ml-6 min-w-[120px]">
          <div className="flex items-center gap-2">
            <span className="text-red-500 text-sm font-medium">
              განაკვეთი 2,176 ₾
            </span>
            <span className="text-gray-400 ml-1">|</span>
            <span className="text-gray-500 text-sm flex items-center">
              <span role="img" aria-label="GB" className="text-lg">
                🇬🇧
              </span>
              <span className="ml-1">გიბშია</span>
            </span>
          </div>
          <span className="text-2xl font-bold text-gray-700 mt-2">
            40,159 <span className="text-gray-400 text-base">₾</span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
        <span>589 ნახვა • 2 დღის წინ</span>
        <div className="flex gap-4 items-center">
          <button className="hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor">
              <rect x="4" y="4" width="12" height="12" rx="2" strokeWidth="2" />
            </svg>
          </button>
          <button className="hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor">
              <path d="M4 12v-8m0 8l2-2m-2 2l-2-2" />
              <circle cx="12" cy="6" r="2" />
            </svg>
          </button>
          <button className="hover:text-red-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor">
              <path d="M4 8c0-2 3-2 4 0 1-2 4-2 4 0 0 2-2 4-4 8-2-4-4-6-4-8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t mt-3 mb-1"></div>

      <div className="flex items-center mt-2 gap-3">
        <img
          src="https://your-image-url.com/mctrans-logo.png"
          alt="MC TRANS"
          className="w-10 h-10 rounded-md border"
        />
        <div>
          <span className="font-semibold text-gray-700">MC TRANS</span>
          <span className="text-gray-500 text-xs ml-1">
            ყველა განაცხადება (26)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
