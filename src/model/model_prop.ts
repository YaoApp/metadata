import { Common } from '@/common'
import { Type } from '@/utils'

import { FieldProp } from './field_prop'

export interface _ModelProp {
	name: Type<
		string,
		{
			'zh-CN': '模型名称'
			'en-US': 'model name'
		}
	>
	table: Type<
		Table,
		{
			'zh-CN': '模型名称'
			'en-US': 'model name'
		}
	>
	columns: Type<
		FieldProp[],
		{
			'zh-CN': '字段定义'
			'en-US': 'model fields'
		}
	>
	indexes: Type<
		Index[],
		{
			'zh-CN': '索引'
			'en-US': 'model indexes'
		}
	>
	relations?: Type<
		{ [key: string]: Relation },
		{
			'zh-CN': '关系映射'
			'en-US': 'relation between models'
		}
	>
	values?: Type<
		any[],
		{
			'zh-CN': '默认数据'
			'en-US': 'default data'
		},
		null,
		{ useEditor: true; editorHeight: 360 }
	>
	option: Type<
		Option,
		{
			'zh-CN': '配置项'
			'en-US': 'model option'
		}
	>
}

interface Table {
	name: Type<
		string,
		{
			'zh-CN': '数据表名称'
			'en-US': 'table name'
		}
	>
	comment?: Type<
		string,
		{
			'zh-CN': '数据表注释中文名'
			'en-US': 'table comment'
		}
	>
	engine?: Type<
		'InnoDB' | 'MyISAM',
		{
			'zh-CN': '数据表注释中文名'
			'en-US': 'table comment'
		}
	>
}

interface Index {
	name: Type<
		string,
		{
			'zh-CN': '索引名称'
			'en-US': 'index name'
		}
	>
	type: Type<
		'index' | 'unique' | 'primary' | 'fulltext',
		{
			'zh-CN': '索引类型'
			'en-US': 'index type'
		}
	>
	columns: Type<
		string[],
		{
			'zh-CN': '关联字段名称列表（顺序有关) '
			'en-US': 'list of associated field names (order dependent)'
		}
	>
	comment: Type<
		string,
		{
			'zh-CN': '	索引注释'
			'en-US': 'index comment'
		}
	>
}

interface Relation {
	type: Type<
		'hasOne' | 'hasMany' | 'hasOneThrough' | 'hasManyThrough',
		{
			'zh-CN': '关联类型'
			'en-US': 'relation type'
		}
	>
	model: Type<
		string,
		{
			'zh-CN': '关联模型'
			'en-US': 'related model'
		}
	>
	key: Type<
		string,
		{
			'zh-CN': '关联模型的关联字段名称'
			'en-US': 'related model key'
		}
	>
	foreign: Type<
		string,
		{
			'zh-CN': '当前模型的关联字段名称'
			'en-US': 'current model foreign key'
		}
	>
	query: Type<
		Common.Query,
		{
			'zh-CN': '查询参数'
			'en-US': 'query params'
		}
	>
	links: Type<
		Array<Relation>,
		{
			'zh-CN': 'hasOneThrough 或 hasManyThrough 多表关联关系定义'
			'en-US': 'hasOneThrough or hasManyThrough multi-table relationship definition'
		}
	>
}

interface Option {
	timestamps?: boolean
	soft_deletes?: boolean
}
