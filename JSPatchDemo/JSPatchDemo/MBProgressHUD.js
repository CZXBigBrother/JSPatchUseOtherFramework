
require('UITableView,UIColor')
//----------------------------------------MBPClass----------------------------------------------
defineClass('MBPClass:UIViewController',{
            viewDidLoad: function() {
            self.ORIGviewDidLoad();
            self.setTitle("MBPClass")
            self.view().setBackgroundColor(UIColor.grayColor())
            
            require('MBProgressHUD')
            MBProgressHUD.showHUDAddedTo_animated(self.view(),YES)
            },
            })
