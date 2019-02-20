# CEMAP



## 基本想法

电子地图首先要有地图。百度公司已经帮我们做好，可以直接拿来用。使用百度地图SDK，要先在其官网注册，获取APK之后才能使用。获取方法，可参见官网上的介绍。

其次，要能定位场馆位置。这是个慢活儿，可以通过百度地图坐标拾取系统，逐个场馆搜索并保存其坐标。

经过以上两步，我们就有了基础地图和场馆坐标，定位功能自然水到渠成。

## 准备工作

### 数据收集与处理

首先把全省文化馆的百度地图坐标拾取出来，并以json文件的形式保存备用（像菜谱上的语言）。不知别人怎么做的，这里晒下笔者用的方法：

第一步，先把每个场馆的信息用Excel表格整理出来，保存成csv文件。

第二步，使用python把csv文件转换成json文件。这在命令行中用一行代码即可实现。

`python -c "import csv,json;print(json.dumps(list(csv.reader(open('csv_file.csv')))))" > a.json`

需要注意的是，python版本要2.7以上。

第三步，编码转码。因为我们的csv文件里面有大量中文，按照上述方法生成的json文件，用某些编辑器打开会出现乱码。解决这个问题，这里使用Notepad++中提供的“编码”功能，转为"utf-8"编码保存即可。

### 开发环境准备

**建立开发目录**

先在github仓库中新增一个仓库，用于保存相关文件和代码。现在代码量还非常小，所以没有设置子目录。有兴趣的朋友可以Clone https://github.com/luckyele/cemap.git。

另外提示一下，可以在手机端安装有Pocket Git，Quick Edit，QPythonL，三款APP，可支持随时随地码。

**测试服务器搭建**

为了测试服务器上的效果，可使用python提供的简单HTTP服务器功能。同样，一行代码即可使用。Windows7 + Python3.x环境下，可以通过下面的命令运行：

`python -m http.server 8080`

这样就可以在开发目录搭建一个简单的HTTP服务器。使用时在浏览器地址栏中输入: 本机IP:8080，即可。

## 代码实现

说代码之前，先看一下效果图。

![Running](http://m.qpic.cn/psb?/b8d7e101-69b9-4c69-b733-64e88bdce5dc/E2eUIvFxWYA6pU9uUhZzJvAqNmYRFZO08P*VT9dJNpQ!/b/dDYBAAAAAAAA&bo=TwPuAgAAAAADB4I!&rf=viewer_4)

界面目前比较糙，划分为三个区域：上端是操作区，中间是地图区，下端是信息显示区。

初步实现的几个功能：标注场所、标注行政区划、读取json数据。


## Basic ideas

Electronic maps need maps first. Baidu company has helped us to do a good job, you can use it directly. To use Baidu Map SDK, you need to register on its official website and get APK before you can use it. Access methods can be found on the official website.

Secondly, we should be able to locate. This is a slow job. You can search and save the coordinates one by one through Baidu Map Coordinate Picking System.

After the above two steps, we have the basic map and the coordinates of the venue, the positioning function will naturally come into being.


## Preparations

### Data Collection and Processing

First of all, it took some time to pick up the coordinates of Baidu map in the Provincial Cultural Museum and save them in the form of JSON files (like the language on the menu). Here's the way I use:

`python -c "import csv,json;print(json.dumps(list(csv.reader(open('csv_file.csv')))))" > a.json`

It should be noted that the python version is more than 2.7.

The third step is coding transcoding. Because there are a lot of Chinese in our CSV file, the JSON file generated according to the above method will be scrambled when we open it with some editors. To solve this problem, we use the "encoding" function provided in Notepad++ to save the "utf-8" encoding.

The first step is to sort out the information of each venue with Excel form and save it as CSV file.

The second step is to use Python to convert CSV files into JSON files. This can be done in one line of code on the command line.


### Development environment preparation

**Establishing Development Catalogue**

Firstly, a new warehouse is added to the GitHub warehouse to store relevant documents and codes. Now the amount of code is very small, so there is no subdirectory set up. Interested friends can be Clone https://github.com/luckyele/cemap.git.

In addition, you can install Pocket Git, Quick Edit, QPython L and three APPs on the mobile phone, which can support anytime, anywhere code.

**Test Server Construction**

To test the effect on the server, you can use the simple HTTP server functionality provided by python. Similarly, a single line of code is available. In Windows 7 + Python 3. x environment, you can run the following commands:

`python -m http.server 8080`

This allows you to build a simple HTTP server in the development directory. When using, you can input IP: 8080 in the browser address bar.

## Code implementation

At present, the interface is relatively rough, divided into three areas: the upper end is the operation area, the middle is the map area, and the lower end is the information display area.

Several functions are preliminarily realized: marking places, marking administrative divisions, and reading JSON data.
