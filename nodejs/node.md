
#   怎么查看曾经下载过的包
    关于nodejs一些包和命令行
    当你在使用nodejs的时候，有的时候你不知道使用的包是否进行了安装，这个时候你就可以通过下面这行命令来进行查询，是否进行了安装
>   npm list -g --depth 0

    * -g:         全局的安装包
    * list:       已安装的node包
    * -depth 0：  这个参数不太清楚，可能是深度0，搜了一下没有找到解释

    ![npmlist](https://github.com/minzione/demo/raw/master/node/images/npmList.png)

    文档来源： http://blog.csdn.net/a454213722/article/details/51981503
    未经许可，不得转载
