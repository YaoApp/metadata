import { Pure } from '@/utils'

import { Admin } from './admin'
import { User } from './user'

export interface Login {
	admin: Admin
	user: User
}

export type PureLogin = Pure<Login>
