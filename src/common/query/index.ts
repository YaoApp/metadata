import { Type } from '@/utils'

import { Column, Rel } from './common'

export interface _Query {
	select: Type<
		string[],
		{
			'zh-CN': '选择字段'
			'en-US': 'select fields'
		}
	>
	wheres: Type<
		Where[],
		{
			'zh-CN': '选择字段'
			'en-US': 'select fields'
		}
	>
	orders: Type<
		Order[],
		{
			'zh-CN': '选择字段'
			'en-US': 'select fields'
		}
	>
	limit: Type<
		number,
		{
			'zh-CN': '返回记录条数'
			'en-US': 'return limit'
		}
	>
	page: Type<
		number,
		{
			'zh-CN': '当前页码'
			'en-US': 'current page number'
		}
	>
	pagesize: Type<
		number,
		{
			'zh-CN': '每页显示记录数量'
			'en-US': 'Display the number of records per page'
		}
	>
	withs: Type<
		{ [key: string]: With },
		{
			'zh-CN': '每页显示记录数量'
			'en-US': 'Display the number of records per page'
		}
	>
}

interface Where {
	rel: Rel
	column: Column
	method: Type<
		'where' | 'orwhere',
		{
			'zh-CN': '查询方法'
			'en-US': 'search method'
		}
	>
	op: Type<
		Operator,
		{
			'zh-CN': '匹配关系'
			'en-US': 'matching relationship'
		}
	>
	value: Type<
		any,
		{
			'zh-CN': '匹配数值'
			'en-US': 'matching value'
		},
		null,
		{ useEditor: true; editorHeight: 120 }
	>
	wheres: Type<
		Where[],
		{
			'zh-CN': '分组查询'
			'en-US': 'group query'
		},
		null,
		{ useEditor: true; editorHeight: 240 }
	>
}

interface Order {
	rel: Rel
	column: Column
	option: Type<
		'asc' | 'desc',
		{
			'zh-CN': '排序方式'
			'en-US': 'sort by'
		}
	>
}

interface With {
	name: Type<
		Operator,
		{
			'zh-CN': '关联关系名称'
			'en-US': 'Relation name'
		}
	>
	query: Type<
		_Query,
		{
			'zh-CN': '查询参数'
			'en-US': 'query params'
		}
	>
}

interface Operator {
	eq: Type<
		string,
		{
			'zh-CN': '='
			'en-US': '='
		}
	>
	like: Type<
		string,
		{
			'zh-CN': 'like'
			'en-US': 'like'
		}
	>
	gt: Type<
		string,
		{
			'zh-CN': '>'
			'en-US': '>'
		}
	>
	ge: Type<
		string,
		{
			'zh-CN': '>='
			'en-US': '>='
		}
	>
	lt: Type<
		string,
		{
			'zh-CN': '<'
			'en-US': '<'
		}
	>
	le: Type<
		string,
		{
			'zh-CN': '<='
			'en-US': '<='
		}
	>
	null: Type<
		string,
		{
			'zh-CN': 'isNull(v)'
			'en-US': 'isNull(v)'
		}
	>
	notnull: Type<
		string,
		{
			'zh-CN': 'isNotNull(v)'
			'en-US': 'isNotNull(v)'
		}
	>
	in: Type<
		string,
		{
			'zh-CN': 'where in'
			'en-US': 'where in'
		}
	>
}
