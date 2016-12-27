
require('UITableView,UIColor')
//----------------------------------------MJExtensionClass----------------------------------------------
defineClass('testModel:NSObject',['key1','key2'],{
            
            })
defineClass('MJExtensionClass:UIViewController',{
            viewDidLoad: function() {
            self.ORIGviewDidLoad();
            self.setTitle("MJExtensionClass")
            self.view().setBackgroundColor(UIColor.grayColor())
            require('testModel')
            var test = {
            "key1": "value1",
            "key2": "values"
            };
            var model = testModel.mj__objectWithKeyValues(test)
            console.log(model.key1())
            console.log(model.key2())
            },
            })

