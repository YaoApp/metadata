import { IComments } from '@/utils'

export type ObjectType = {
	value: PureType
	comments: IComments
	default: string | number | boolean | Array<string | number>
	options: Record<string, any>
}

export type PureType =
	| 'string'
	| 'number'
	| 'boolean'
	| 'array'
	| 'any'
	| Array<string | number>
	| Map<string, PureType>
	| ObjectType
	| {
			[key: string]: ObjectType
	  }
