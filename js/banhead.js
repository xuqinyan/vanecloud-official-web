$(function(){
	var header=
				'<div class="header menu">'+
					'<div class="container">'+
						'<div class="logo pull-left"></div>'+
						'<div class="logo pull-left"></div>'+
						'<nav class="navHead pull-left">'+
							'<li><a href="index.html">首页</a></li>'+
							'<li><a href="news.html">新闻动态</a>'+
								'<div class="navSection">'+
									'<ul>'+
										'<li><a href="javascript:">国际动态</a></li>'+
										'<li><a href="javascript:">行业动态</a></li>'+
										'<li><a href="javascript:">氢氧动态</a></li>'+
										'<li><a href="javascript:">新品发布</a></li>'+
									'</ul>'+
								'</div>'+
							'</li>'+
							'<li><a href="javascript:">CSHO+</a></li>'+
							'<li><a href="javascript:">解决方案</a></li>'+
							'<li><a href="javascript:">产品中心</a></li>'+
							'<li><a href="javascript:">体验中心</a></li>'+
						'</nav>'+
						'<hgroup class="logInOut pull-left">'+
							'<li><a href="login.html">登录</a></li>'+
							'<li><a href="registry.html" class="active">注册</a></li>'+
						'</hgroup>'+
						'<div class="search pull-left">'+
							'<input type="search" placeholder="搜索vaneWIKI" />'+
							'<input type="button" />'+
						'</div>'+
					'</div>'+
				'</div>';
	$('body').prepend(header);

})