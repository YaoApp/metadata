import { Pure } from '@/utils'

import { Admin } from './admin'
import { Layout } from './layout'
import { User } from './user'

export interface Login {
	admin: Admin
	user: User
	layout: Layout
}

export type PureLogin = Pure<Login>
