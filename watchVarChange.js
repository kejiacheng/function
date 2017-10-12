/*
	监听变量变化过程并取特定值

	listen函数：初始化需监听的变量 params(1.变量名称 2.变量初始值 3.变量特定标记位) 注：变量特定标记位不可为undefined

	setVar函数：变量赋值  params(1.变量名称 2.变量值 3.变量特定标记位) 注：变量特定标记位不可为undefined

	getVarList函数：获取变量从监听到目前的值变化过程(返回值为Array) params(1.变量名称)

	getTargetVarVal函数：返回某变量的目标标记位的值 params(1.变量名称 2.变量特定标记位)
*/

/*
	例：
		var
			watch = new watchVarChange(),
			ke

		ke = watch.listen('ke', '1')

		ke = watch.setVar('ke', '123')

		ke = watch.setVar('ke', '456')

		ke = watch.setVar('ke', '789', 'today')

		ke = watch.setVar('ke', 'no')

*/

var watchVarChange = function () {
    this.varCollect = {}

    this.listen = function (name, value, mark) {
        this.varCollect[name] = {
        	varHistList: value === undefined ? [] : [value]
        }

        if (mark !== undefined) {
    		this.varCollect[name][mark] = value
    	}

    	return value
    }

    this.setVar = function (name, value, mark) {
    	this.varCollect[name].varHistList.push(value)
    	
    	if (mark !== undefined) {
    		this.varCollect[name][mark] = value
    	}

    	return value
    }

    this.getVarList = function (name) {
    	return this.varCollect[name].varHistList
    }

    this.getTargetVarVal = function (name, mark) {
    	return this.varCollect[name][mark]
    }
}