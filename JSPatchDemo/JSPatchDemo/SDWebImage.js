
require('UITableView,UIColor')
//----------------------------------------SDWebClass----------------------------------------------
defineClass('SDWebClass:UIViewController',{
            viewDidLoad: function() {
            require('UIImageView,NSURL')
            self.ORIGviewDidLoad();
            self.setTitle("SDWebClass")
            self.view().setBackgroundColor(UIColor.grayColor())
            var imgBackground = UIImageView.alloc().initWithFrame(self.view().frame())
            self.view().addSubview(imgBackground)
            imgBackground.sd__setImageWithURL(NSURL.URLWithString("https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"))
            },
            })
