import { IComments } from '@/utils'

type ObjectType = {
	value: PureType
	comments: IComments
	default: string | number | Array<string | number>
}

export type PureType =
	| 'string'
	| 'number'
	| 'array'
	| Array<string | number>
	| Map<string, PureType>
	| ObjectType
	| {
			[key: string]: ObjectType
	  }
