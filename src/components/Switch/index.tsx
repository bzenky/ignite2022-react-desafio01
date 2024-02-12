import * as SwitchRadix from '@radix-ui/react-switch';
import { SwitchRoot, SwitchThumb } from './styles';
import { useContext } from 'react';
import { ToDoContext } from '../../contexts/ToDoContext';

export function Switch() {
  const {
    automaticReordering,
    handleAutomaticReordering
  } = useContext(ToDoContext)

  return (
    <SwitchRoot checked={automaticReordering} onCheckedChange={handleAutomaticReordering}>
      <SwitchThumb />
    </SwitchRoot>
  )
}