const ccc = '1231231'
console.log(ccc)
type A = number

type ApiResponse<T> = {
  code: number
  data: T
}

type UserResponse = ApiResponse<{
  id: string
  name: string
}>

class Test {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const test =new Test('test')

console.log(test)

export {}
