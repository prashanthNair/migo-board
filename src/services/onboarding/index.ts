import { onboardApiInstance } from '../../api';

export const getBrandDetails = async (brandId: string) => {
  const { data } = await onboardApiInstance.get(`/${brandId}`);
};

export const x = 1;
