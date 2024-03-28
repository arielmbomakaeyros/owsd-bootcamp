// import { PointOfSaleViewState } from '@/redux/features/create-point-of-sale-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useSideBarToggle = () => {
  const sideBartoggle: any = useSelector(
    (state: RootState) => state?.SideNavigationBar?.sideBartoggle
  );

  const dispatch = useDispatch<AppDispatch>();

  return {
    sideBartoggle,
    dispatch,
  };
};
