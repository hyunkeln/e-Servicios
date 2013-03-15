<%@ Page Language="VB" AutoEventWireup="true"  Title="e-Services" debug="true" %>
<script runat="server">
Public Function getUrl() As String
      getUrl = getNoQueryUrl() & "?" & Request.ServerVariables("QUERY_STRING")
      'getUrl = getUrl.Replace("default.aspx", "")
      'getUrl = getUrl.Replace("?section=home", "")
      'getUrl = Request.Url.toString()
End Function
Public Function getNoQueryUrl() as String
	getNoQueryUrl = "http://" & Request.ServerVariables("server_name") & Request.ServerVariables("PATH_INFO") 
end Function
Public Function getSection() As String
	'getSection =  Request.ServerVariables("QUERY_STRING")
	'getSection = getSection.Replace("fb=","")
	getSection = Request.QueryString("fb")
End Function
dim titleMeta As String, imageMeta As String, descriptionMeta As String, keysMeta As String
Public Function getMetaTags() As String
	Dim section As String = getSection()
	if section = "e-Banca" OR true then
		titleMeta = "e-Servicios : e-Banca"
		imageMeta = "http://crearmessenger.org/wp-content/uploads/2012/11/prodigy-msn.jpg"
		descriptionMeta = "Portal e-Servicios, e-Banca"
	end if	
End Function
Public Function redirect() as String
	Dim section As String = getSection()
	if section="e-Banca" OR section = "e-Gobierno" OR section = "e-Shopping" then
		redirect = "<scrip" & "t type='text/javascript'>top.location = '" & getNoQueryUrl() & "#/" & getSection() & "';</scrip" & "t>"
	end if
	
End Function
</script>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
        <%=getMetaTags()%>
    <head >
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><%=titleMeta%></title>
        <meta name="viewport" content="width=device-width">
        <meta name='title' content='<%=titleMeta%>' />
        <meta property='og:title' content='<%=titleMeta%>'/>
		<meta property='og:type' content='blog'/>
		<meta property='og:url' content='<%=getUrl()%>'/>
		<meta property='og:image' content='<%=imageMeta%>'/>
		<meta property='og:site_name' content='Prodigy MSN | e-Servicios'/>
		<meta property='fb:admins' content='100000171021936'/>
		<meta property='og:description' content='<%=descriptionMeta%>'/>
		<meta itemprop='name' content='<%=titleMeta%>'>
		<meta itemprop='description' content='<%=descriptionMeta%>'>
		<meta itemprop='image' content='<%=imageMeta%>'>
		<meta name='image' content='<%=imageMeta%>'>
		<meta name='description' content='<%=descriptionMeta%>' />
		<meta name='keywords' content='<%=keysMeta%>' />
		<meta name='medium' content='article' />
		<link rel='image_src' href='<%=imageMeta%>' />
		
		
		
        <link rel="stylesheet" href="assets/css/normalize.min.css">
        <link rel="stylesheet" href="assets/css/main.css"> 
        <link rel="stylesheet" href="assets/css/jScrollPane.css">
        <link rel="stylesheet" href="assets/css/basic.css">
        <link rel="stylesheet" href="assets/css/basic_ie.css">

        <script src="application/libraries/modernizr-2.6.2.min.js"></script>
        <%=redirect()%>
        
    </head>
    <body>
    
	    
	    <header>
			<!-- <hgroup>
				<h1>e-Servicios</h1>
			</hgroup> -->
			<nav>
				<div id="navmenu">
    	
				</div>
			</nav>
		</header>
        <div id="floors-wrapper">
         
        </div>
        
        <div class="hide">
        	<div id="nodeContent"></div>
        </div>
        
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script src="application/libraries/plugins.js"></script>
        <script src="application/libraries/ascensor.js"></script>
        
        <script src="application/config/config.js"></script>
        <script src="application/controllers/eservicios.js"></script>
        <script src="application/controllers/main.js"></script>
        <!-- <img src="assets/images/dots.png" style="display: block; top: 0px; left: 0px; width: 1024px; height: 3000px; z-index: 0; position: fixed;"> -->
        
    </body>
</html>
