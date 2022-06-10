安全放假 顺利回家
====
## 项目成员</br>
刘诗怡 2020212205169 组长</br>
张佳璇 2020212205312</br>
叶青晨 2020212205303</br>
## 项目描述</br>
实现了一个各地区防疫政策查询系统移动端，提供全国各地城市中高风险地区个数、封控地区个数以及相关防疫政策内容，同时可显示该地区风险程度以及近期疫情情况。该系统具有查询、切换、跳转等功能。</br>
## 界面设计</br>
### 首页</br>
![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/head.JPG)
### 详情页</br>
![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/detail.JPG)
## 数据结构</br>
city|risk|lockdown|detail
:-|:-|:-:|:-
洛阳|0|0|低风险地区进入洛阳。1.报备2.核酸证明
湘潭|0|0|低风险地区进入湘潭。1.48小时核酸检测证明
## 功能模块</br>
1.政策匹配</br>使用json文件存储数组包含每一个城市的数据</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/1.png)</br></br>
2.城市选择</br>点击查询后，利用界面显示或隐藏，实现两个界面的来回跳转。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/2.png)</br></br>
在city页面点击查询帮助的A、B等字母，页面自动调整到该字母开头的城市位置。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/3.png)</br></br>
3.城市变更</br>在城市页面选中要查询的城市后，改变原本page1页面的城市名，并返回到页面page1实现改变html的内容代码。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/4.png)</br></br>
4.风险匹配</br>根据json中提取到的数据判断城市是属于低风险地区还是中高风险地区。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/5.png)</br></br>x用来确定是在出发城市选择还是在目的地城市进行选择。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/6.png)</br></br>
5.政策查看</br>通过基础的show()和hide()实现page1和page2页面的跳转，并修改page2的title为要查询的城市。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/7.png)</br></br>使用ajax从json文件中提取需要显示的数据，并显示在page2该地政策位置处中。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/8.png)</br></br>运用界面的出现和隐藏手段，在查询完政策后，可点击“返回”按钮，跳转至主界面。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/9.png)</br></br>
6.城市互换</br>(1).文字互换：点击切换按钮能够将城市所在位置的文本进行互换。</br>
(2).颜色改变：判断该地区风险程度是否改变，如果改变更换下方文字
color。</br>![](https://github.com/Yqccccc/yqccccc.github.com/raw/master/img/10.png)</br>
