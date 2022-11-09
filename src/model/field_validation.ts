import { Type } from '@/utils'

export interface FieldValidation {
	method: Type<
		Methons,
		{
			'zh-CN': '校验方法'
			'en-US': 'validation method'
		}
	>
	args: Type<
		any[],
		{
			'zh-CN': '校验方法参数'
			'en-US': 'validation method parameters'
		}
	>
	message: Type<
		string,
		{
			'zh-CN': '如校验不通过，返回的错误提示。支持使用 {{<name>}} 引用字段信息, 如{{label}}将被替换为字段 label中定义的数值; {{input}} 被替换为用户输入数值'
			'en-US': 'if the verification fails, an error message will be returned. Supports the use of {{<name>}} to refer to field information, such as {{label}} will be replaced with the value defined in the field label; {{input}} will be replaced with the user input value'
		}
	>
}

type Methons = 'typeof' | 'min' | 'max' | 'enum' | 'pattern' | 'minLength' | 'maxLength' | 'email' | 'mobile'
