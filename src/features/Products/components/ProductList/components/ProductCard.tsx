import { Currency, type Product } from '@/features/Products/types/types';
import {
  daysSince,
  generateImageUrl,
  getFuelTypeLabel,
  getGearTypeLabel,
  formatNumberWithCommas,
} from '@/utils/utils';
import { useState } from 'react';
import useManufactrurs from '@/features/Products/components/Filters/hooks/useManufacturers';
import InfoDetail from './InfoDetail';
import { ReactComponent as LariSvg } from '@assets/lari.svg';
import { ReactComponent as DollarSvg } from '@assets/dollar.svg';
import { ReactComponent as RunSvg } from '@assets/run.svg';
import { ReactComponent as GearSvg } from '@assets/gear.svg';
import { ReactComponent as EngineSvg } from '@assets/engine.svg';
import { ReactComponent as WheelSvg } from '@assets/wheel.svg';

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
    <article className="bg-surface md:h-[180px] md:rounded-xl w-full p-3">
      <header className="md:hidden flex items-center justify-between gap-2 mb-3">
        <h2 className="flex font-medium text-raisin-100 text-lg md:text-[14px]">
          <a
            className="line-clamp-1 text-raisin-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            {productTitle}
          </a>
          <span className="ml-2 text-muted-gray font-medium whitespace-nowrap">
            {`${prod_year}წ`}
          </span>
        </h2>
        <aside className="flex items-center gap-3 shrink-0">
          <div className="text-[14px] md:text-[12px] flex items-center">
            <span
              className={`${customs_passed ? 'text-success' : 'text-error'}`}
            >
              {customs_passed ? 'განბაჟებული' : 'განბაჟება'}
            </span>
          </div>
        </aside>
      </header>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        <figure className="w-full h-60 md:w-[170px] md:h-[156px] shrink-0 overflow-hidden rounded-lg cursor-pointer">
          <img
            src={generateImageUrl(photo, daily_views?.product_id, photo_ver)}
            alt={`${productTitle} Image`}
            className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>

        <section className="w-full flex flex-col justify-between gap-3 md:gap-0">
          <header className="hidden md:flex items-center justify-between gap-2">
            <h2 className="flex font-medium text-raisin-100 text-[14px]">
              <a
                className="line-clamp-1 text-raisin-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                {productTitle}
              </a>
              <span className="ml-2 text-muted-gray font-medium whitespace-nowrap">
                {`${prod_year}წ`}
              </span>
            </h2>
            <aside className="flex items-center gap-3 shrink-0">
              <div className="text-[12px] flex items-center">
                <span
                  className={`${
                    customs_passed ? 'text-success' : 'text-error'
                  }`}
                >
                  {customs_passed ? 'განბაჟებული' : 'განბაჟება'}
                </span>
              </div>
            </aside>
          </header>

          <main className="flex flex-col gap-3">
            <div className="flex w-full justify-between items-center">
              <dl className="flex gap-3 md:gap-4">
                <InfoDetail icon={<EngineSvg />}>
                  {engine_volume / 1000} {getFuelTypeLabel(fuel_type_id)}
                </InfoDetail>
                <InfoDetail icon={<RunSvg />}>{car_run_km}კმ</InfoDetail>
              </dl>
              <div className="flex items-center gap-2">
                {price_usd === 0 ? (
                  <span className="text-md leading-4 text-raisin-100 pr-2">
                    შეთანხმებით
                  </span>
                ) : (
                  <button
                    onClick={() =>
                      setCurrency(
                        currency === Currency.USD ? Currency.GEL : Currency.USD
                      )
                    }
                    className="flex items-center gap-1"
                  >
                    {formatNumberWithCommas(
                      currency === Currency.USD
                        ? Number((price_usd ?? 0).toFixed(1))
                        : Number(((price_usd ?? 0) * 2.7).toFixed(1))
                    )}
                    {currency === Currency.USD ? (
                      <span className="p-0.2 bg-surface-muted rounded-3xl cursor-pointer">
                        <DollarSvg className="w-6 h-6" />
                      </span>
                    ) : (
                      <LariSvg className="w-6 h-6 cursor-pointer" />
                    )}
                  </button>
                )}
              </div>
            </div>

            <dl className="flex gap-3 md:gap-4">
              <InfoDetail icon={<GearSvg />}>
                {getGearTypeLabel(gear_type_id)}
              </InfoDetail>
              <InfoDetail icon={<WheelSvg />}>
                {right_wheel ? 'მარჯვენა' : 'მარცხენა'}
              </InfoDetail>
            </dl>
          </main>

          <div className="md:hidden my-2 border-t border-border"></div>

          <footer className="flex gap-2">
            <div className="flex items-center text-[12px] text-muted-gray shrink-0">
              {daily_views?.views ?? 0} ნახვა
              <span className="inline-flex w-0.5 h-0.5 round-full bg-muted-gray mx-2"></span>
              {daysSince(order_date)}
            </div>
          </footer>
        </section>
      </div>
    </article>
  );
};

export default ProductCard;
