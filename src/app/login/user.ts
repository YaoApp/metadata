import { Type } from '@/utils'

import { Action, Entry } from './common'

export interface User {
	entry: Entry
	action: Type<
		Action,
		{
			'zh-CN': '需要执行的动作'
			'en-US': 'Actions to be executed'
		}
	>
}
