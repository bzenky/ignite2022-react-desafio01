import { useContext } from 'react'
import * as SelectR from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import { ToDoContext } from '../../contexts/ToDoContext'
import { themeList } from '../../utils/themeList'
import { Content, Item, Trigger, Viewport } from './style'

export function Select() {
  const { theme, handleChangeTheme } = useContext(ToDoContext)

  return (
    <SelectR.Root value={theme} onValueChange={(value: 'default' | 'light') => handleChangeTheme(value)}>

      <Trigger>
        <SelectR.Value />
        <SelectR.Icon>
          <CaretDown size={12} />
        </SelectR.Icon>
      </Trigger>

      <SelectR.Portal>
        <Content>
          <SelectR.ScrollUpButton />
          <Viewport>

            {themeList.map(theme => {
              return (
                <Item key={theme.id} value={theme.value}>
                  <SelectR.ItemText>
                    {theme.description}
                  </SelectR.ItemText>
                </Item>
              )
            })}
          </Viewport>
          <SelectR.ScrollDownButton />
          <SelectR.Arrow />
        </Content>
      </SelectR.Portal>
    </SelectR.Root>
  )
}