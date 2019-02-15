# cemap


## 基本想法

电子地图首先要有地图。百度公司已经帮我们做好，可以直接拿来用。使用百度地图SDK，要先在其官网注册，获取APK之后才能使用。获取方法，可参见官网上的介绍。

其次，要能定位场馆位置。这是个慢活儿，可以通过百度地图坐标拾取系统，逐个场馆搜索并保存其坐标。

经过以上两步，我们就有了基础地图和场馆坐标，定位功能自然水到渠成。

## 准备工作

### 数据收集与处理

首先花了一些时间，把全省文化馆的百度地图坐标拾取出来，并以json文件的形式保存备用（像菜谱上的语言）。不知别人怎么做的，这里晒下笔者用的方法：

第一步，先把每个场馆的信息用Excel表格整理出来，保存成csv文件。

第二步，使用python把csv文件转换成json文件。这在命令行中用一行代码即可实现。


python -c "import csv,json;print(json.dumps(list(csv.reader(open('csv_file.csv')))))" > a.json

需要注意的是，python版本要2.7以上。

第三步，编码转码。因为我们的csv文件里面有大量中文，按照上述方法生成的json文件，用某些编辑器打开会出现乱码。解决这个问题，这里使用Notepad++中提供的“编码”功能，转为"utf-8"编码保存即可。

### 开发环境准备

建立开发目录

先在github仓库中新增一个仓库，用于保存相关文件和代码。现在代码量还非常小，所以没有设置子目录。有兴趣的朋友可以Clone https://github.com/luckyele/cemap.git。

另外提示一下，可以在手机端安装有Pocket Git，Quick Edit，QPythonL，三款APP，可支持随时随地码。

测试服务器搭建

为了测试服务器上的效果，可使用python提供的简单HTTP服务器功能。同样，一行代码即可使用。Windows7 + Python3.x环境下，可以通过下面的命令运行：


python -m http.server 8080

这样就可以在开发目录搭建一个简单的HTTP服务器。使用时在浏览器地址栏中输入: 本机IP:8080，即可。

## 代码实现

说代码之前，先看一下效果图。上图右侧是http服务器运行的情形。左侧是这个应用使用时的情况。

界面目前比较糙，划分为三个区域：上端是操作区，中间是地图区，下端是信息显示区。

初步实现的几个功能：标注场所、标注行政区划、读取json数据，看起来还能work。现在自己已经有了一些想要增加的功能，比如，与之前写的一个爬虫结合起来，可以实现在地图直观显示各地信息。慢慢改吧。


有什么好的意见建议，欢迎留言

