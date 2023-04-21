import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'
import { getContrast } from 'polished'

export const Trigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
  height: 26px;
  background: #f2f2f2;
  width: 100px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => getContrast('#f2f2f2', theme.text) > 4.5 ? theme.text : theme.primary};
  border: 2px solid ${({ theme }) => theme.border};
 
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryDark};
  } 
`

export const Content = styled(Select.Content)`
  overflow: hidden;
  background-color: #f2f2f2;  
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const Viewport = styled(Select.Viewport)`
  padding: 6px;
`

export const Item = styled(Select.Item)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 26px;
  font-size: 0.875rem;
  color: ${({ theme }) => getContrast('#f2f2f2', theme.text) > 4.5 ? theme.text : theme.primary};
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.secondaryDark};
    color: ${({ theme }) => getContrast('#f2f2f2', theme.primary) > 4.5 ? theme.text : '#f2f2f2'};
  }
`