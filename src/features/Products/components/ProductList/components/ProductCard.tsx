import { Currency, type Product } from '@/features/Products/types/types';
import {
  daysSince,
  generateImageUrl,
  getFuelTypeLabel,
  getGearTypeLabel,
} from '@/utils/utils';
import { useState } from 'react';
import useManufactrurs from '@/features/Products/components/Filters/hooks/useManufacturers';
import InfoDetail from './InfoDetail';
import { ReactComponent as LariSvg } from '@assets/lari.svg';
import { ReactComponent as DollarSvg } from '@assets/dollar.svg';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [currency, setCurrency] = useState<Currency>(Currency.USD);
  const { map: manufacturersMap } = useManufactrurs();

  const {
    photo,
    daily_views,
    photo_ver,
    engine_volume,
    man_id,
    prod_year,
    customs_passed,
    gear_type_id,
    fuel_type_id,
    car_run_km,
    order_date,
    right_wheel,
    price_usd,
  } = product;

  const productTitle = manufacturersMap?.[man_id] ?? '';

  return (
    <article className="bg-white h-[180px] rounded-xl w-full shadow-sm p-3 max-w-3xl mx-auto font-sans">
      <div className="flex gap-4">
        <figure className="w-62 h-36 overflow-hidden rounded-lg cursor-pointer">
          <img
            src={generateImageUrl(photo, daily_views?.product_id, photo_ver)}
            alt={`${productTitle} Image`}
            className="w-full h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <section className="w-full flex flex-col justify-between">
          <header className="flex items-center justify-between">
            <h3 className="text-lg text-black">
              {productTitle} <span className="text-md">{`${prod_year}წ`}</span>
            </h3>
            <aside className="flex items-center gap-3">
              <div className="flex items-center text-xs bg-gray-100 rounded-md overflow-hidden border"></div>
              <span
                className={`text-sm ${
                  customs_passed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {customs_passed ? 'განბაჟებული' : 'განბაჟება'}
              </span>
            </aside>
          </header>
          <main>
            <div className="flex w-full justify-between">
              <dl className="flex gap-4">
                <InfoDetail icon={<LariSvg></LariSvg>}>
                  {engine_volume / 1000} {getFuelTypeLabel(fuel_type_id)}
                </InfoDetail>
                <InfoDetail icon={<LariSvg></LariSvg>}>
                  {car_run_km}კმ
                </InfoDetail>
              </dl>
              <div className="flex items-center gap-2">
                {price_usd === 0 ? (
                  <span className="text-sm">შეთანხმებით</span>
                ) : (
                  <button
                    onClick={() =>
                      setCurrency(
                        currency === Currency.USD ? Currency.GEL : Currency.USD
                      )
                    }
                    className="flex items-center gap-1"
                  >
                    {currency === Currency.USD
                      ? price_usd
                      : Math.round((price_usd ?? 0) / 2.7)}
                    {currency === Currency.USD ? (
                      <span className="p-0.2 bg-gray-100 rounded-3xl cursor-pointer">
                        <DollarSvg className="w-6 h-6" />
                      </span>
                    ) : (
                      <LariSvg className="w-6 h-6 cursor-pointer" />
                    )}
                  </button>
                )}
              </div>
            </div>
            <dl className="flex gap-4 mt-2">
              <InfoDetail icon={<LariSvg></LariSvg>}>
                {getGearTypeLabel(gear_type_id)}
              </InfoDetail>
              <InfoDetail icon={<LariSvg></LariSvg>}>
                {right_wheel ? 'მარჯვენა' : 'მარცხენა'}
              </InfoDetail>
            </dl>
          </main>
          <footer className="flex gap-2">
            <span className="text-sm">{daily_views?.views ?? 0} ნახვა</span>
            <time className="text-sm">{daysSince(order_date)}</time>
          </footer>
        </section>
      </div>
    </article>
  );
};

export default ProductCard;
