/*
 * MyFonts Webfont Build ID 374432, 2011-02-09T15:16:26-0500
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the urls below.
 * 
 * Webfont: Kondolar
 * Url: http://new.myfonts.com/fonts/cadson-demak/kondolar/regular/
 * Foundry: Cadson Demak
 * Copyright: Copyright (c) 2010 by Ekaluck Peanpanawate. All rights reserved.
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 100,000/month
 * CSS font-family: Kondolar-Regular
 * CSS font-weight: normal
 * 
 * Webfont: Kondolar Italic
 * Url: http://new.myfonts.com/fonts/cadson-demak/kondolar/italic/
 * Foundry: Cadson Demak
 * Copyright: Copyright (c) 2010 by Ekaluck Peanpanawate. All rights reserved.
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 100,000/month
 * CSS font-family: Kondolar-Italic
 * CSS font-weight: normal
 * 
 * Webfont: Kondolar Bold
 * Url: http://new.myfonts.com/fonts/cadson-demak/kondolar/bold/
 * Foundry: Cadson Demak
 * Copyright: Copyright (c) 2010 by Ekaluck Peanpanawate. All rights reserved.
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 100,000/month
 * CSS font-family: Kondolar-Bold
 * CSS font-weight: normal
 * 
 * Webfont: Kondolar Black
 * Url: http://new.myfonts.com/fonts/cadson-demak/kondolar/black/
 * Foundry: Cadson Demak
 * Copyright: Copyright (c) 2010 by Ekaluck Peanpanawate. All rights reserved.
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 100,000/month
 * CSS font-family: Kondolar-Black
 * CSS font-weight: normal
 * 
 * (c) 2011 Bitstream, Inc
*/



// safari 3.1: data-css
// firefox 3.6+: woff
// firefox 3.5+: data-css
// chrome 4+: data-css
// chrome 6+: woff
// IE 5+: eot
// IE 9: woff
// opera 10.1+: data-css
// mobile safari: svg/data-css
// android: data-css

var browserName, browserVersion, webfontType,  webfontTypeOverride;
 
if (typeof(customPath) == 'undefined')
	var customPath = false;


if (typeof(woffEnabled) == 'undefined')
	var woffEnabled = true;


if (/myfonts_test=on/.test(window.location.search))
	var myfonts_webfont_test = true;

else if (typeof(myfonts_webfont_test) == 'undefined')
	var myfonts_webfont_test = false;


if (customPath)
	var path = customPath;

else {
	var scripts = document.getElementsByTagName("SCRIPT");
	var script = scripts[scripts.length-1].src;

	if (!script.match("://") && script.charAt(0) != '/')
		script = "./"+script;
		
	var path = script.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');
}


if (myfonts_webfont_test)
	document.write('<script type="text/javascript" src="' +path+ '/MyFonts Webfonts Order M2721065_test.js"></script>');


if (/webfont=(woff|ttf|eot)/.test(window.location.search))
{
	webfontTypeOverride = RegExp.$1;

	if (webfontTypeOverride == 'ttf')
		webfontTypeOverride = 'data-css';
}


if (/MSIE (\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'MSIE';
	browserVersion = new Number(RegExp.$1);
	if (browserVersion >= 9.0 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 5.0)
		webfontType = 'eot';
}
else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Firefox';
	browserVersion = new Number(RegExp.$1);
	if (browserVersion >= 3.6 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 3.5)
		webfontType = 'data-css';
}
else if (/Chrome\/(\d+\.\d+)/.test(navigator.userAgent)) // must check before safari
{
	browserName = 'Chrome';
	browserVersion = new Number(RegExp.$1);

	if (browserVersion >= 6.0 && woffEnabled)
		webfontType = 'woff';

	else if (browserVersion >= 4.0)
		webfontType = 'data-css';
}
else if (/Mozilla.*(iPhone|iPad).* OS (\d+)_(\d+).* AppleWebKit.*Safari/.test(navigator.userAgent))
{
		browserName = 'MobileSafari';
		browserVersion = new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)

	if(browserVersion >= 4.2)
		webfontType = 'data-css';

	else
		webfontType = 'svg';
}
else if (/Mozilla.*(iPhone|iPad).*AppleWebKit.*Safari/.test(navigator.userAgent))
{
	browserName = 'MobileSafari';
	webfontType = 'svg';
}
else if (/Safari\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Safari';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		if (browserVersion >= 3.1)
			webfontType = 'data-css';
	}
}
else if (/Opera\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Opera';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		if (browserVersion >= 10.1)
			webfontType = 'data-css';
	}
}


if (webfontTypeOverride)
	webfontType = webfontTypeOverride;

switch (webfontType)
{
		case 'eot':
		document.write("<style>\n");
				document.write("@font-face {font-family:\"Kondolar-Regular\";src:url(\"" + path + "/webfonts/eot/style_196622.eot\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Italic\";src:url(\"" + path + "/webfonts/eot/style_196620.eot\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Bold\";src:url(\"" + path + "/webfonts/eot/style_196621.eot\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Black\";src:url(\"" + path + "/webfonts/eot/style_196619.eot\");}\n");
				document.write("</style>");
		break;
		
		case 'woff':
		document.write("<style>\n");
				document.write("@font-face {font-family:\"Kondolar-Regular\";src:url(\"" + path + "/webfonts/woff/style_196622.woff\") format(\"woff\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Italic\";src:url(\"" + path + "/webfonts/woff/style_196620.woff\") format(\"woff\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Bold\";src:url(\"" + path + "/webfonts/woff/style_196621.woff\") format(\"woff\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Black\";src:url(\"" + path + "/webfonts/woff/style_196619.woff\") format(\"woff\");}\n");
				document.write("</style>");
		break;
	
		case 'data-css':
		document.write("<link rel='stylesheet' type='text/css' href='" + path + "/webfonts/datacss/MyFonts Webfonts Order M2721065.css'>");
		break;
	
		case 'svg':
		document.write("<style>\n");
				document.write("@font-face {font-family:\"Kondolar-Regular\";src:url(\"" + path + "/webfonts/svg/style_196622.svg#Kondolar-Regular\") format(\"svg\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Italic\";src:url(\"" + path + "/webfonts/svg/style_196620.svg#Kondolar-Italic\") format(\"svg\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Bold\";src:url(\"" + path + "/webfonts/svg/style_196621.svg#Kondolar-Bold\") format(\"svg\");}\n");
				document.write("@font-face {font-family:\"Kondolar-Black\";src:url(\"" + path + "/webfonts/svg/style_196619.svg#Kondolar-Black\") format(\"svg\");}\n");
				document.write("</style>");
		break;
		
	default:
		break;
}