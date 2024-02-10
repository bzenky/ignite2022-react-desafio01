export function GetLocalStorageItem(key: string) {
  const value = window.localStorage.getItem(key)

  if (value) {
    return JSON.parse(value)
  }

  return null
}

export function SetLocalStorageItem(key: string, value: any) {
  const newValue = JSON.stringify(value)

  window.localStorage.setItem(key, newValue)
}