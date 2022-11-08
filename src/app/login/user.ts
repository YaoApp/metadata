import { Type } from '@/utils'

import { Action, Layout } from './common'

export interface User {
	action: Type<
		Action,
		{
			'zh-CN': '需要执行的动作'
			'en-US': 'Actions to be executed'
		}
	>
	layout: Type<
		Layout,
		{
			'zh-CN': '界面相关配置'
			'en-US': 'Layout related configuration'
		}
	>
}
