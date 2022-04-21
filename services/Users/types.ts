namespace UsersService {
  export interface UserInfo {
    readonly googleId: string
    name?: string
    email?: string
    picture?: string
  }
}

export default UsersService;
