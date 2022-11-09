import { Type } from '@/utils'

export type Rel = Type<
	string,
	{
		'zh-CN': '关联模型'
		'en-US': 'related model'
	}
>

export type Column = Type<
	string,
	{
		'zh-CN': '字段名称'
		'en-US': 'field name'
	}
>
