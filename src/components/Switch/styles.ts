import * as Switch from '@radix-ui/react-switch';
import styled from 'styled-components';

export const SwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 22px;
  background-color: #b4b4b4;
  border-color: #757575;
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.1s ease-in-out;

  &[data-state='checked'] {
    background-color: #50ad75;
  }
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 17px;
  height: 17px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px rgba(255,255,255, 0.3);
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`
