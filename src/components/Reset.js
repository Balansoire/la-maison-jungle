import { useDispatch } from 'react-redux';
import { resetPlantList } from '../features/plantSlice';
import { useEffect } from 'react';

function Reset() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPlantList());
  }, [dispatch]);

  return (
    <h2>La liste des plantes a été réinitialisée</h2>
  );
}

export default Reset;
