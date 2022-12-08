export interface DateState {
  value: string
  touched: boolean
}

export interface DatePart extends DateState {
  error: string | undefined
}
