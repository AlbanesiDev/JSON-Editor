import { atom } from 'nanostores'

export const jsonStore = {
  code: atom<string>(''),
  codeOutput: atom<string>(''),
  isValid: atom<boolean>(true),
  jsonKeys: atom<string[]>([]),

  setCodeOutput(value: string) {
    this.codeOutput.set(value)
  },

  setCode(value: string) {
    this.code.set(value)
    this.codeOutput.set('')
    this.isValid.set(!value)
    localStorage.setItem('jsonEditorContent', value)
  },

  clearCode() {
    this.code.set('')
    this.codeOutput.set('')
    this.isValid.set(false)
    this.jsonKeys.set([])
    localStorage.removeItem('jsonEditorContent')
  },

  setValidState(state: boolean) {
    this.isValid.set(state)
  },

  setJsonKeys(keys: string[]) {
    this.jsonKeys.set(keys)
  },
}
