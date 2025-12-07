import { Tab } from '@/shared';
import { ReactComponent as CarIcon } from '@assets/car.svg';
import { ReactComponent as MotoIcon } from '@assets/moto.svg';
import { ReactComponent as TractorIcon } from '@assets/tractor.svg';

type VehicleType = 'all' | 'car' | 'moto' | 'tractor';

interface VehicleTabsProps {
  vehicleType: VehicleType;
  onVehicleTypeChange: (type: VehicleType) => void;
}

const VehicleTabs = ({
  vehicleType,
  onVehicleTypeChange,
}: VehicleTabsProps) => {
  const getIconColor = (type: VehicleType) =>
    vehicleType === type ? 'var(--color-brand)' : 'var(--color-text-muted)';

  return (
    <div className="w-full flex">
      <Tab
        isActive={vehicleType === 'car'}
        onClick={() => onVehicleTypeChange('car')}
      >
        <CarIcon className="w-[62px] h-8" color={getIconColor('car')} />
      </Tab>
      <Tab
        isActive={vehicleType === 'tractor'}
        onClick={() => onVehicleTypeChange('tractor')}
      >
        <TractorIcon className="w-[62px] h-8" color={getIconColor('tractor')} />
      </Tab>
      <Tab
        isActive={vehicleType === 'moto'}
        onClick={() => onVehicleTypeChange('moto')}
      >
        <MotoIcon className="w-[62px] h-8" color={getIconColor('moto')} />
      </Tab>
    </div>
  );
};

export default VehicleTabs;
