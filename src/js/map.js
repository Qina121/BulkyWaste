export function map(ak) {
    return new Promise(function(resolve, reject) {
        if (typeof BMap !== 'undefined') {
            resolve(BMap)
            return true
        }
        window.onBMapCallback = function() {
            resolve(BMap)
        }
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
            'http://api.map.baidu.com/api?v=2.0&ak=' + 'h0fUd40nx8z4aDdHZjdy9GjuLjnK8Ih2' + '&callback=onBMapCallback'
        script.onerror = reject
        document.head.appendChild(script)
    })
}