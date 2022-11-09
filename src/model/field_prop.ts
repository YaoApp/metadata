import { Type } from '@/utils'

import { FieldType } from './field_type'
import { FieldValidation } from './field_validation'

export interface FieldProp {
	name: Type<
		string,
		{
			'zh-CN': '模型名称'
			'en-US': 'model name'
		}
	>
	type: Type<
		FieldType,
		{
			'zh-CN': '模型名称'
			'en-US': 'model name'
		}
	>
	label: Type<
		string,
		{
			'zh-CN': '字段显示名称，用于在管理表单，开发平台等成场景下呈现'
			'en-US': 'display name'
		}
	>
	comment: Type<
		string,
		{
			'zh-CN': '字段注释，对应数据表中字段注释'
			'en-US': 'field comment'
		}
	>
	title: Type<
		string,
		{
			'zh-CN': '字段标题'
			'en-US': 'field title'
		}
	>
	description: Type<
		string,
		{
			'zh-CN': '字段介绍'
			'en-US': 'field description'
		}
	>
	default: Type<
		string,
		{
			'zh-CN': '字段默认值'
			'en-US': 'field default value'
		}
	>
	default_raw: Type<
		string,
		{
			'zh-CN': '字段默认值，支持数据库函数，如 NOW() default 和 default_raw 同时存在 default_raw 优先级高'
			'en-US': 'field default value, support database functions, such as NOW() default and default_raw exist at the same time default_raw has high priority'
		}
	>
	crypt: Type<
		'AES' | 'PASSWORD',
		{
			'zh-CN': '字段加密存储方式(MySQL Only)'
			'en-US': 'field encryption storage method (MySQL Only)'
		}
	>
	nullable: Type<
		boolean,
		{
			'zh-CN': '字段是否可以为空，默认为 false'
			'en-US': 'is the field nullable, default is false'
		}
	>
	index: Type<
		boolean,
		{
			'zh-CN': '字段是否为索引，默认为 false'
			'en-US': 'is the field nullable, default is false'
		}
	>
	unique: Type<
		boolean,
		{
			'zh-CN': '字段是否为唯一索引，默认为 false , 如为 true 无需同时将 index 设置为 true'
			'en-US': 'whether the field is a unique index, the default is false , if it is true, there is no need to set index to true at the same time'
		}
	>
	primary: Type<
		boolean,
		{
			'zh-CN': '字段是否为主键，每张表至多一个主键字段。默认为 false'
			'en-US': 'whether the field is the primary key, each table has at most one primary key field. Default is false'
		}
	>
	validations: Type<
		FieldValidation[],
		{
			'zh-CN': '字段校验规则'
			'en-US': 'field validation rules'
		}
	>
}
