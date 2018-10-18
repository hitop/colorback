function colorback () {
	// 模拟tapet 生成随机色块背景
	var dw=document.body.clientWidth;
	var scss=".backcolor{display:block;height:" + dw + "px;position:absolute;z-index:-888;box-shadow:5px 5px 10px rgba(80,80,80,0.6);overflow: hidden;}"
	add_css(scss);

	adddivbyid("ba1");
	adddivbyid("ba2");
	adddivbyid("ba3");
	adddivbyid("ba4");

	var ba1 = document.getElementById('ba1')
	var ba2 = document.getElementById('ba2')
	var ba3 = document.getElementById('ba3')
	var ba4 = document.getElementById('ba4')

	ba1.setAttribute("class","backcolor");
	ba2.setAttribute("class","backcolor");
	ba3.setAttribute("class","backcolor");
	ba4.setAttribute("class","backcolor");

	var ba1width = Math.floor(Math.random()*300+100);
	var ba2width = Math.floor(Math.random()*300+100);
	var ba3width = Math.floor(Math.random()*300+100);
	var ba4width = Math.floor(Math.random()*300+100);

	ba2.style.width=ba2width + "px";
	ba1.style.width=ba1width + "px";
	ba3.style.width=ba3width + "px";
	ba4.style.width=ba4width + "px";

	ba1positonleft = randomrange(400,1000);
	ba1positontop = randomrange(-300,100);
	ba2positonleft = ba1positonleft + ba1width + randomrange(100,400);
	ba2positontop = randomrange(-300,100);

	ba3positonleft = randomrange(-300,100);
	ba3positontop = randomrange(-300,100);
	ba4positonleft = ba3positonleft + ba3width + randomrange(100,400);
	ba4positontop = randomrange(-300,100);

	ba1.style.left=ba1positonleft + "px";
	ba1.style.top=ba1positontop + "px";
	ba2.style.left=ba2positonleft + "px";
	ba2.style.top=ba2positontop + "px";
	ba3.style.left=ba3positonleft + "px";
	ba3.style.top=ba3positontop + "px";
	ba4.style.left=ba4positonleft + "px";
	ba4.style.top=ba4positontop + "px";

	var deg=randomrange(0,90);
	var degz=deg+90;

	ba1.style.transform="rotate("+deg+"deg)";
	ba2.style.transform="rotate("+deg+"deg)";
	ba3.style.transform="rotate("+degz+"deg)";
	ba4.style.transform="rotate("+degz+"deg)";


	ba1.style.background=randomrgba();
	ba2.style.background=randomrgba();
	ba3.style.background=randomrgba();
	ba4.style.background=randomrgba();

	document.getElementsByTagName('body')[0].style.background=randomrgba();
}

function randomrange(under, over){ 
	return parseInt(Math.random()*(over-under+1) + under); 
} 

function randomrgba () {
	// rgba随机生成
	var r=randomrange(0,255);
	var g=randomrange(0,255);
	var b=randomrange(0,255);
	var a=Math.random();

	var rgba = "rgba("+r+","+g+","+b+","+a+")";

	return rgba;
}

function adddivbyid (id) {
	var newdiv = document.createElement("div");
	newdiv.id=id;  
    document.body.appendChild(newdiv); 
}

function add_css(str_css) { //Copyright @ rainic.com
 try { //IE下可行
  var style = document.createStyleSheet();
  style.cssText = str_css;
 }
 catch (e) { //Firefox,Opera,Safari,Chrome下可行
  var style = document.createElement("style");
  style.type = "text/css";
  style.textContent = str_css;
  document.getElementsByTagName("HEAD").item(0).appendChild(style);
 }
}