/*
	将url参数转换为json格式

	ex ?a=1&b=2&c=3
	{
		a: 1,
		b: 2,
		3: 3
	}
*/


function getUrlParams() {
    if (window.location.search === '') {
        return null
    }else{
        var
            json = {},
            arr = window.location.search.slice(1).split('&')

        for (var i = 0; i < arr.length; i++) {
            var
                innerArr = arr[i].split('=')

            json[innerArr[0]] = innerArr[1]
        }

        return json
    }
}