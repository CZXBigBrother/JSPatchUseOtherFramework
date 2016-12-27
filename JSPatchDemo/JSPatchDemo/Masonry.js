
require('UITableView,UIColor')

//----------------------------------------MasonryClass----------------------------------------------
defineClass('MasonryClass:UIViewController',{
            viewDidLoad: function() {
            require('UIView,MASConstraint,MASConstraintMaker')
            self.ORIGviewDidLoad();
            self.setTitle("MasonryClass")
            self.view().setBackgroundColor(UIColor.grayColor())
            var testView = UIView.alloc().init()
            self.view().addSubview(testView)
            testView.setBackgroundColor(UIColor.redColor())
            testView.mas__makeConstraints(block("MASConstraintMaker*",function(make){
                                                make.top().equalTo()(self.view())
                                                make.right().equalTo()(self.view())
                                                make.left().equalTo()(self.view())
                                                make.bottom().equalTo()(self.view())
                                                }))
            var testView2 = UIView.alloc().init();
            self.view().addSubview(testView2);
            testView2.setBackgroundColor(UIColor.greenColor())
            testView2.mas__makeConstraints(block("MASConstraintMaker*",function(make){
                                                 make.top().equalTo()(testView.mas__topMargin()).offset()(100)
                                                 make.right().equalTo()(testView.mas__rightMargin());
                                                 make.left().equalTo()(testView.mas__leftMargin());
                                                 make.height().equalTo()(50)
                                                 }))
            },
            })
