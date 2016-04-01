(function(W){

    W.getParams = function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
            r   = W.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };
    var status = getParams('status');
    if( status !== null){

        if(status == 'false')
        {
            alert('还没有填完整文章信息');
        }else if(status == 'true')
        {
            alert('发表成功');
        }
    }

})(window);