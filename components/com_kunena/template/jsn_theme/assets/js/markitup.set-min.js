jQuery(document).ready(function(a){a("#kbbcode-message").markItUp(bbcodeSettings);if(a("#modal-code").length==0){a(".codemodalboxbutton").hide();}else{a(".codesimplebutton").hide();}a("#code-modal-submit").click(function(){var b=a("#kcodetype option:selected").val();a.markItUp({openWith:'[code type="'+b+'"]',closeWith:"[/code]"});return false;});a("#map-modal-submit").click(function(){var c=a("#modal-map-city").val();var f=a("#modal-map-type").val();var b=a("#modal-map-zoomlevel").val();var d="";var e="";if(f!=undefined){d="type="+f;}if(b!=undefined){e="zoom="+b;}a.markItUp({openWith:"[map "+d+" "+e+"]"+c,closeWith:"[/map]"});return false;});a("#picture-modal-submit").click(function(){var c=a("#modal-picture-url").val();var d=a("#modal-picture-size").val();var b="";if(d.length>0){b="size="+d;}if(c.length>0){a.markItUp({openWith:"[img "+b+"]"+c,closeWith:"[/img]"});return false;}});a("#link-modal-submit").click(function(){var c=a("#modal-link-url").val();var b=a("#modal-link-text").val();var d="";if(b.length>0){d=b;}else{d=c;}if(c.length>0){a.markItUp({openWith:"[url="+c+"]"+d,closeWith:"[/url]"});return false;}});a("#videosettings-modal-submit").click(function(){var e=a("#kvideoprovider-modal").val();var f=a("#modal-video-id").val();var j=a("#modal-video-width").val();var d=a("#modal-video-height").val();var g=a("#modal-video-size").val();var c=a("#kvideoprovider-list-modal option:selected").val();var b="425";var h="344";if(j.length>0&&d.length>0){b="width="+j;h="height="+d;}else{b="width="+b;h="height="+h;}var i="";if(g.length>0){i="size="+g;}if(a("#kvideoprovider-modal").length>0){if(e.lentgth>0&&f.length>0){a.markItUp({openWith:"[video "+i+" "+b+" "+h+" type="+e+"]"+f,closeWith:"[/video]"});return false;}}else{a.markItUp({openWith:"[video "+i+" "+b+" "+h+" type="+c+"]"+f,closeWith:"[/video]"});return false;}});a("#videourlprovider-modal-submit").click(function(){var b=a("#modal-video-urlprovider-input").val();a.markItUp({openWith:"[video]"+b,closeWith:"[/video]"});return false;});a(".smileyimage").click(function(){var b=a(this).attr("alt");a.markItUp({openWith:b,closeWith:""});return false;});if(!kunena_showvideotag){a(".videodropdownbutton").remove();}if(!kunena_disemoticons){a(".emoticonsbutton").remove();}if(!kunena_showebaytag){a(".ebaybutton").remove();}if(!kunena_showspoilertag){a(".spoilerbutton").remove();}if(!kunena_showmapstag){a(".mapbutton").remove();}if(!kunena_showtwittertag){a(".tweetbutton").remove();}if(!kunena_showlinktag){a(".linkbutton").remove();}if(!kunena_showpicturetag){a(".picturebutton").remove();}if(!kunena_showhidetag){a(".hiddentextbutton").remove();}if(!kunena_showtabletag){a(".tablebutton").remove();}if(!kunena_showcodetag){a(".codesimplebutton").remove();}if(!kunena_showquotetag){a(".quotebutton").remove();}if(!kunena_showdividertag){a(".markItUpSeparator").remove();}if(!kunena_showinstagramtag){a(".instagrambutton").remove();}if(!kunena_showsoundcloudtag){a(".soundcloudbutton").remove();}});