import { Type } from '@/utils'

export type Length = Type<
	number,
	{
		'zh-CN': '字段长度'
		'en-US': 'Field length'
	}
>

export type Decimal = Type<
	_Decimal,
	{
		'zh-CN': '小数相关配置'
		'en-US': 'config about decimal'
	}
>

interface _Decimal {
	precision: Type<
		number,
		{
			'zh-CN': '小数长度'
			'en-US': 'decimal length'
		}
	>
	scale: Type<
		number,
		{
			'zh-CN': '小数点位数'
			'en-US': 'decimal scale'
		}
	>
}
