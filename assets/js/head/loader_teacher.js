document.getElementById("header").innerHTML="<nav class=\"navbar navbar-default top-navbar\" role=\"navigation\">\
                <a class=\"navbar-brand\" style=\" width: 290px;\"href=\"index.html\"><strong><i class=\"icon fa fa-plane\"></i> 读书会在线学习系统</strong></a>\
                <div id=\"sideNav\" href=\"#\"><i class=\"fa fa-bars icon\"></i></div><form class=\"navbar-form navbar-right\"  style=\"margin-top:12px;\">\
        <div class=\"form-group\">\
          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\
        </div>\
        <button type=\"submit\" class=\"btn btn-default\">搜索</button>\
      </form>\
      <ul class=\"nav navbar-top-links navbar-right\">\
                <li class=\"dropdown\">\
                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\
                        <i class=\"glyphicon glyphicon-user\"></i> <i class=\"fa fa-caret-down\"></i>\
                    </a>\
                    <ul class=\"dropdown-menu dropdown-user\">\
                        <li data-toggle=\"modal\" data-target=\"#cpw\"><a href=\"#\"><i class=\"fa fa-braille fa-fw\"></i> 修改密码</a>\
                        <li onclick='logout()'><a href=\"#\"><i class=\"fa fa-sign-out fa-fw\"></i> 退出登录</a>\
                        </li>\
                    </ul>\
                </li>\
            </ul>\
        </nav>"

document.getElementById("footer").innerHTML="<footer><div style=\"text-align:center;\">Copyright &copy; 2020.ZGJSU ITOBase.<a target=\"_blank\" href=\"http://www.zjgsu.edu.cn/\">联系我们</a></div>\
                </footer>\
        <!-- Modal -->\
        <div class=\"modal fade\" id=\"cpw\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\
          <div class=\"modal-dialog\" role=\"document\">\
            <div class=\"modal-content\">\
              <div class=\"modal-header\">\
                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\
                <h4 class=\"modal-title\" id=\"myModalLabel\">修改密码</h4>\
              </div>\
              <div class=\"modal-body\">\
                <form>\
                  <div class=\"form-group\">\
                    <label for=\"exampleInputEmail1\">旧密码</label>\
                    <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"旧密码\">\
                  </div>\
                  <div class=\"form-group\">\
                    <label for=\"exampleInputPassword1\">新密码</label>\
                    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"至少6位\">\
                  </div>\
                   <div class=\"form-group\">\
                    <label for=\"exampleInputPassword1\">重复输入</label>\
                    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\
                  </div>\
                </form>\
              </div>\
              <div class=\"modal-footer\">\
                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>\
                <button type=\"button\" class=\"btn btn-primary\">确认修改</button>\
              </div>\
            </div>\
          </div>\
        </div>"

document.getElementById("slid").innerHTML="<nav class=\"navbar-default navbar-side\" role=\"navigation\">\
      <div class=\"sidebar-collapse\">\
        <ul class=\"nav\" id=\"main-menu\">\
          <li>\
            <a class=\"active-menu\" href=\"teacher_look_all_student.html\" id=\"stu\"><i class=\"fa fa-dashboard\"></i> 我的学生</a>\
          </li>\
        </ul>\
      </div>\
    </nav>"

var host="http://10.21.30.218:8080";