export const generateImageUrl = (
  photo: string,
  productId: number,
  photoVersion: string
): string => {
  const baseUrl = import.meta.env['VITE_IMAGE_BASE_URL'] as string;

  return `${baseUrl}${photo}/thumbs/${productId}_1.jpg?v=${photoVersion}`;
};

export const getFuelTypeLabel = (fuelTypeId: number): string => {
  const fuelTypes: Record<number, string> = {
    1: 'ბენზინი',
    2: 'დიზელი',
    3: 'ელექტრო',
  };
  return fuelTypes[fuelTypeId] ?? 'სხვა';
};

export const getGearTypeLabel = (gearTypeId: number): string => {
  const gearTypes: Record<number, string> = {
    1: 'მექანიკა',
    2: 'ავტომატიკა',
  };
  return gearTypes[gearTypeId] ?? 'სხვა';
};

export function daysSince(pastDate: string | Date): string | number {
  const now = new Date();
  const past = new Date(pastDate);

  const diffMs = now.getTime() - past.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'დღეს';
  }
  if (diffDays === 1) {
    return 'გუშინ';
  }

  return `${diffDays} დღის წინ`;
}

export function transformForSelect<T>(
  data: T[],
  labelKey: keyof T,
  valueKey: keyof T
): { label: string; value: string }[] {
  return data.map((item) => ({
    label: String(item[labelKey]),
    value: String(item[valueKey]),
  }));
}
