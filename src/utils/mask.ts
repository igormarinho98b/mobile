import { toPattern } from 'vanilla-masker'

interface MaskActions {
  phone: (value: string) => string
  cnpj: (value: string) => string
  cpf: (value: string) => string
  zipcode: (value: string) => string
  noMask: (value: string) => string
}

export const mask: MaskActions = {
  phone: value => toPattern(value, '(99) 99999-9999'),
  cnpj: value => toPattern(value, '99.999.999/9999-99'),
  cpf: value => toPattern(value, '999.999.999-99'),
  zipcode: value => toPattern(value, '99999-999'),
  noMask: value => value
}
