import { Pure, Type } from '@/utils'

export interface AppJson {
	name: Type<
		string,
		{
			'zh-CN': '名称'
			'en-US': 'App name'
		}
	>
	short: Type<
		string,
		{
			'zh-CN': '简称'
			'en-US': 'App Short name'
		}
	>
	description: Type<
		string,
		{
			'zh-CN': '简介'
			'en-US': 'App introdution'
		}
	>
	version: Type<
		string,
		{
			'zh-CN': '版本'
			'en-US': 'App version'
		}
	>
	xgen: Type<
		'1.0' | 'deprecated',
		{
			'zh-CN': 'xgen版本'
			'en-US': 'XGen version'
		}
	>
	adminRoot: Type<
		string,
		{
			'zh-CN': '管理后台路径前缀'
			'en-US': 'Admin path'
		}
	>
	setup: Type<
		string,
		{
			'zh-CN': '初始化脚本'
			'en-US': 'Setup script'
		}
	>
	logo: Type<
		string,
		{
			'zh-CN': 'Logo路径，默认使用Yao Logo'
			'en-US': 'Logo path, default use Yao Logo'
		}
	>
	favicon: Type<
		string,
		{
			'zh-CN': 'favicon路径，默认使用Yao favicon'
			'en-US': 'Favicon path, default use Yao favicon'
		}
	>
	token: Type<
		'sessionStorage' | 'localStorage',
		{
			'zh-CN': '身份令牌存储方式'
			'en-US': 'Token storage way'
		}
	>
	menu: Type<
		Menu,
		{
			'zh-CN': '应用菜单'
			'en-US': 'App menu'
		}
	>
	optional: Type<
		Optional,
		{
			'zh-CN': '可选配置项'
			'en-US': 'App optional config'
		}
	>
}

export type PureAppJson = Pure<AppJson>

interface Menu {
	process: Type<
		string,
		{
			'zh-CN': '初始化菜单的处理器'
			'en-US': 'Process for initializing menus'
		},
		'flows.init.menu'
	>
	args: Type<
		any[],
		{
			'zh-CN': '处理器参数'
			'en-US': 'Process args'
		}
	>
}

interface Optional {
	hideNotification: Type<
		boolean,
		{
			'zh-CN': '隐藏侧边栏消息按钮'
			'en-US': 'Hide sidebar message button'
		},
		true
	>
	hideSetting: Type<
		boolean,
		{
			'zh-CN': '隐藏侧边栏设置按钮'
			'en-US': 'Hide sidebar settings button'
		},
		false
	>
}
