import { Tab } from '@/shared';
import { ReactComponent as CarIcon } from '@assets/car.svg';
import { ReactComponent as MotoIcon } from '@assets/moto.svg';
import { ReactComponent as TractorIcon } from '@assets/tractor.svg';
import type { VehicleType } from '../types/filters.types';
import { useState } from 'react';

const VEHICLE_TABS = [
  { type: 'car' as VehicleType, Icon: CarIcon },
  { type: 'tractor' as VehicleType, Icon: TractorIcon },
  { type: 'moto' as VehicleType, Icon: MotoIcon },
];

const VehicleTabs = () => {
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');
  const getIconColor = (type: VehicleType) =>
    vehicleType === type ? 'var(--color-brand)' : 'var(--color-text-muted)';

  return (
    <div className="w-full flex mb-6">
      {VEHICLE_TABS.map(({ type, Icon }) => (
        <Tab
          key={type}
          isActive={vehicleType === type}
          onClick={() => setVehicleType(type)}
        >
          <Icon className="w-[62px] h-8" color={getIconColor(type)} />
        </Tab>
      ))}
    </div>
  );
};

export default VehicleTabs;
