(function(){dust.register("secondaryNav",body_0);function body_0(chk,ctx){return chk.write("<ul class=\"unstyled vertical-nav ").reference(ctx.get("ulClass"),ctx,"h").write("\">").section(ctx.get("navigation"),ctx,{"block":body_1},null).write("</ul>");}function body_1(chk,ctx){return chk.write("<li><a href=\"").reference(ctx.get("url"),ctx,"h").write("\">").reference(ctx.get("name"),ctx,"h").write("</a></li>");}return body_0;})();
